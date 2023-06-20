export interface MetaProps {
  hidden?: boolean; //是否隐藏，不显示到菜单栏的位置
  keepAlive?: boolean; //开启keepAlive
  isAuth?: boolean; //是否需要登录
  title: string; //标题
  key?: string; //key
  icon?: string; //图标
  selectIcon?: string; //选中的图标
  isLink?: string; //是否是外部链接
}

export interface RouteRecordRaw {
  children?: RouteRecordRaw[];
  element?: React.ReactNode;
  index?: boolean;
  key?: string;
  path?: string;
  meta?: MetaProps;
}
