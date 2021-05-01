/**
 * scene.js
 * 场景
 */

const _default = {
  width: 600,
  height: 500
}

import { MAX_ROAD_WIDTH, MIN_ROAT_WIDTH, MAX_LENGTH, MIN_LENGTH, GAME_WIDTH, GAME_SPEED, ROAD_COLOR, WALL_COLOR, BAN_MID_RANGE } from './configuration'

interface IDot {
  x: number,
  y: number
}

interface ILine extends Array<IDot> {
}

interface ILines extends Array<ILine> {
}

export default class Scene {
  ctx: CanvasRenderingContext2D;
  width: number;
  height: number;
  spacer: number;
  leftLines: ILines;
  rightLines: ILines;
  constructor (ctx: CanvasRenderingContext2D, config: any) {
    this.ctx = ctx
    Object.assign(this, _default, config)

    // 根据画布宽度和实际游戏宽度，计算左右留空区域
    this.spacer = (this.width - GAME_WIDTH) / 2

    // 初始化
    this.init()
  }

  /**
   * 初始化场景
   */
  init () {
    this.leftLines = this.initLeftLines()
    this.rightLines = this.initRightLines()
  }

  /**
   * 更新场景
   */
  update () {
    this.sceneRollDown(this.leftLines)
    this.sceneRollDown(this.rightLines)

    // 添加新的路
    if (this.leftLines[0][0].y > -this.height * 2) {
      this.leftLines.unshift(this.getLeftLine(this.leftLines[0][0], true))
      this.rightLines.unshift(this.getRightLine(this.leftLines[0], this.rightLines[0][0], true))
    }

    if (this.leftLines.length >= 30) {
      this.leftLines = this.filterUnusableRoad(this.leftLines)
      this.rightLines = this.rightLines.slice(0, this.leftLines.length)
    }
  }

  /**
   * 场景下滚，数组的 y 增加，并把超出画布下边界的线清除掉
   * @param  {Array} arr 线数组
   * @return {Array}     线数组
   */
  sceneRollDown (arr: ILines) {
    return arr.map((obj) => {
      obj[0].y += GAME_SPEED
    })
  }

  /**
   * 过滤掉不可用的路线（超出底部范围
   * @param  {Array} arr 未过滤数组
   * @return {Array}     过滤后数组
   */
  filterUnusableRoad (arr: ILines): ILines {
    return arr.filter((obj: ILine) => obj[0].y < this.height * 2)
  }

  /**
   * 初始化道路左侧的线
   * @return {Array} 线数组
   */
  initLeftLines (): ILines {
    let arr: ILines = [[{ x: 0, y: 0 }, { x: 0, y: this.height }]]
    while (arr[0][0].y < -this.height * 2) {
      arr.unshift(this.getLeftLine(arr[0][0], true))
    }
    return arr
  }


  /**
   * 初始化道路右侧的线
   * @return {Array} 线数组
   */
  initRightLines (): ILines {
    let arr: ILines = [[{ x: this.width, y: 0 }, { x: this.width, y: this.height }]]
    for (let i = this.leftLines.length - 2; i > 0; i--) {
      arr.unshift(this.getRightLine(this.leftLines[i], arr[i - 1][1], true))
    }
    return arr
  }

  /**
   * 得到一条左边的线
   * @param  {Object}  dot        一个点坐标对象，为空时则根据范围随机一个点
   * @param  {Boolean} isReverse 是否为反方向获得线
   * @return {Array}             一个包含起点坐标和结束坐标的线数组 eg: [startDot, endDot]
   */
  getLeftLine (dot: IDot, isReverse?: Boolean): ILine {
    let endDot: IDot = dot
    if (isReverse) {
      dot = this.getLeftOtherDot(endDot, isReverse)
    }
    else if (dot) {
      endDot = this.getLeftOtherDot(dot)
    }
    return [dot, endDot]
  }

  /**
   * 得到一条右侧的线，根据左侧的线获得
   * @param  {Array}  line      左侧的线
   * @param  {Object}  dot       一个点坐标对象
   * @param  {Boolean} isReverse 是否为反方向获得线
   * @return {Array}            一个包含起点坐标和结束坐标的线数组 eg: [startDot, endDot]
   */
  getRightLine (line: ILine, dot: IDot, isReverse?: Boolean): ILine {
    return isReverse ? [this.getRightDot(line[0]), dot] : [dot || this.getRightDot(line[0]), this.getRightDot(line[1])]
  }

  /**
   * 渲染场景
   */
  render () {
    this.renderWall()
    this.renderRoad()
  }

  /**
   * 渲染道路
   */
  renderRoad () {
    this.ctx.fillStyle = ROAD_COLOR
    this.connectRoadPath()
    this.ctx.fill()
  }

  /**
   * 连接道路的路径，将左侧和右侧线数组连接成一起
   * @return {[type]} [description]
   */
  connectRoadPath () {
    this.ctx.save()

    this.ctx.beginPath()
    this.connectLine(this.leftLines[0][0], this.leftLines[0][1])
    Array.from(this.leftLines, (obj: ILine) => {
      this.connectLine(obj[0], obj[1])
    })
    this.connectLine(this.leftLines[this.leftLines.length - 1][1], this.rightLines[this.rightLines.length - 1][1])
    for (let i = this.rightLines.length - 1; i > 0; i--) {
      let obj = this.rightLines[i]
      this.connectLine(obj[1], obj[0])
    }
    this.connectLine(this.rightLines[0][0], this.leftLines[0][0])

    this.ctx.restore()
  }

  /**
   * 根据两个点连成一条线
   * @param  {Object} dot1  起始点
   * @param  {Object} dot2  终止点
   */
  connectLine (dot1: IDot, dot2: IDot) {
    this.ctx.lineTo(dot1.x, dot1.y)
    this.ctx.lineTo(dot2.x, dot2.y)
  }

  /**
   * 画墙
   */
  renderWall () {
    this.ctx.save()
    Array.from(this.leftLines.concat(this.rightLines), (obj) => {
      let [dot1, dot2] = obj
      let WALL_HEIGHT = this.height / 2

      let grd = this.ctx.createLinearGradient(dot1.x, dot1.y, dot2.x + WALL_HEIGHT, dot2.y + WALL_HEIGHT)
      grd.addColorStop(0, WALL_COLOR)
      grd.addColorStop(1, 'transparent')

      this.ctx.fillStyle = grd
      this.ctx.save()
      this.ctx.beginPath()
      this.ctx.moveTo(dot1.x, dot1.y)
      this.ctx.lineTo(dot2.x, dot2.y)
      this.ctx.lineTo(dot2.x, dot2.y + WALL_HEIGHT)
      this.ctx.lineTo(dot1.x, dot1.y + WALL_HEIGHT)
      this.ctx.restore()
      this.ctx.fill()
    })
    this.ctx.restore()
  }

  /**
   * 根据一个点，获取另外一个点
   * @param  {Object}  dot       点坐标对象
   * @param  {Boolean} isReverse 是否反方向获取线
   * @return {[type]}            [description]
   */
  getLeftOtherDot (dot: IDot, isReverse?: Boolean): IDot {
    return {
      x: dot.x > this.width / 2 ? this.getRandom(this.spacer, this.width / 2 - BAN_MID_RANGE / 2) : this.getRandom(this.width / 2 + BAN_MID_RANGE / 2, this.width - MAX_ROAD_WIDTH - this.spacer),
      y: dot.y + (this.getRandom(MIN_LENGTH, MAX_LENGTH) * (isReverse ? -1 : 1))
    }
  }

  /**
   * 得到右侧的点
   * @param  {Object} dot 一个左侧的坐标点
   * @return {Object}     一个右侧的坐标点
   */
  getRightDot (dot: IDot): IDot {
    return {
      x: this.getRandom(dot.x + MIN_ROAT_WIDTH, dot.x + MAX_ROAD_WIDTH),
      y: dot.y
    }
  }

  /**
   * 根据范围，获得一个随机数
   * @param  {Number} min 范围最小值
   * @param  {Number} max 范围最大值
   * @return {Number}     随机数
   */
  getRandom (min: number, max: number): number {
    return ~~(Math.random() * (max - min)) + min
  }
}