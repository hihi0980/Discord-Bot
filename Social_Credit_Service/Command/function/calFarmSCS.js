//1小時
const hour = 60 * 60 * 1000

//每毫秒可獲取的sc
const sc = 100 / hour

//計算時間差距
module.exports = async function callFarmSCS(time){
    const difference = (new Date()).getTime() - time
    let farm_sc = parseInt(difference * sc)
    
    //最高1200，最低0 , 若果回傳undefined/null，一略當0
    farm_sc = farm_sc > 1200 ? 1200 : farm_sc
    farm_sc = farm_sc < 0 || !farm_sc ? 0 : farm_sc
    
    return farm_sc
}