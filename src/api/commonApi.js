import { Post, Get, Put, Delete } from "@/utils/request";
export const login = (data) => Post("testPost/flow"); //登录
export const getInfo = () => Get("getTest/info");
export const loginOut = () => Post("/sso/loginout.action", {});
export const getListClassify = () => Post("/gdl/classify/list"); //获取指标分类
export const downloadExcel = () => Get("/gdl/import/template", {}, "down"); //下载模板
