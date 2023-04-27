import _ from "lodash";

//对数组对象按某个属性值大小进行排序
export const sortList = (list, keys = "id") => {
  const compare = (keys) => {
    return function (a, b) {
      return a[keys] - b[keys];
    };
  };
  let newList = list.sort(compare(keys));
  return newList;
};

/**
 * @function autoHover - 循环高亮图表
 * @param { Object } myChart - vue-charts组件实例
 * @param { Number } num - 数据长度
 * @param { Number } time - 调用间隔
 */
export function autoHover(myChart, num, time = 4000) {
  if (num < 1) return;
  let count = 0;
  let timeTicket = null;
  timeTicket && clearInterval(timeTicket);
  timeTicket = setInterval(function () {
    // 如果之前被销毁就清除定时器
    if (myChart.isDisposed()) {
      clearInterval(timeTicket);
      return;
    }
    myChart.dispatchAction({
      type: "downplay",
      seriesIndex: 0, // serieIndex的索引值   可以触发多个
    });
    myChart.dispatchAction({
      type: "highlight", // 高亮
      seriesIndex: 0,
      dataIndex: count,
    });
    myChart.dispatchAction({
      type: "showTip", // 展示提示框
      seriesIndex: 0,
      dataIndex: count,
    });
    count++;
    if (count >= num) {
      count = 0;
    }
  }, time);
  myChart.on("mouseover", function (params) {
    clearInterval(timeTicket);
    myChart.dispatchAction({
      type: "downplay",
      seriesIndex: 0,
    });
    myChart.dispatchAction({
      type: "highlight",
      seriesIndex: 0,
      dataIndex: params.dataIndex || 0,
    });
    myChart.dispatchAction({
      type: "showTip",
      seriesIndex: 0,
      dataIndex: params.dataIndex || 0,
    });
  });

  myChart.on("mouseout", function () {
    timeTicket && clearInterval(timeTicket);
    timeTicket = setInterval(function () {
      myChart.dispatchAction({
        type: "downplay",
        seriesIndex: 0, // serieIndex的索引值   可以触发多个
      });
      myChart.dispatchAction({
        type: "highlight",
        seriesIndex: 0,
        dataIndex: count,
      });
      myChart.dispatchAction({
        type: "showTip",
        seriesIndex: 0,
        dataIndex: count,
      });
      count++;
      if (count >= num) {
        count = 0;
      }
    }, time);
  });
  return timeTicket;
}

/**
 * @function useChartScroll - 自动滚动图表
 * @param { Array } xData - charts组件X轴数据
 * @param { Array } serverData - charts组件数据
 * @param { Number } dataLen - 需要显示的条数
 */
export const useChartScroll = (
  xData,
  serverData,
  dataLen = 4,
  delay = 3000
) => {
  if (!xData || serverData.length < 1) {
    return;
  }
  // 原始AxisData
  const originAxis = _.cloneDeep(xData);
  // 原始seriesData
  const originSeries = _.cloneDeep(serverData);
  xData.length = dataLen;
  serverData.length = dataLen;
  // 初始索引
  let index = 0;
  const actionTimer = setInterval(() => {
    if (index >= originAxis.length) index = 0;
    // 从顶部删除数据
    xData.splice(0, 1);
    serverData.splice(0, 1);
    xData.push(originAxis[index]);
    serverData.push(originSeries[index]);
    index++;
  }, delay);
  return actionTimer;
};
