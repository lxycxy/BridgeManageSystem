import '@vue/runtime-core'

export {}

declare module '@vue/runtime-core' {
  export interface GlobalComponents {
    AButton: typeof import('ant-design-vue/es')['Button']
    ACard: typeof import('ant-design-vue/es')['Card']
    ACardGrid: typeof import('ant-design-vue/es')['CardGrid']
    ACol: typeof import('ant-design-vue/es')['Col']
    ADatePicker: typeof import('ant-design-vue/es')['DatePicker']
    AdminNavbar: typeof import('./src/components/adminNavbar.vue')['default']
    AdminSider: typeof import('./src/components/adminSider.vue')['default']
    AForm: typeof import('ant-design-vue/es')['Form']
    AFormItem: typeof import('ant-design-vue/es')['FormItem']
    AInput: typeof import('ant-design-vue/es')['Input']
    AInputNumber: typeof import('ant-design-vue/es')['InputNumber']
    AInputPassword: typeof import('ant-design-vue/es')['InputPassword']
    AMenu: typeof import('ant-design-vue/es')['Menu']
    AMenuItem: typeof import('ant-design-vue/es')['MenuItem']
    AModal: typeof import('ant-design-vue/es')['Modal']
    APopconfirm: typeof import('ant-design-vue/es')['Popconfirm']
    ARow: typeof import('ant-design-vue/es')['Row']
    ASelect: typeof import('ant-design-vue/es')['Select']
    AStatistic: typeof import('ant-design-vue/es')['Statistic']
    ASubMenu: typeof import('ant-design-vue/es')['SubMenu']
    ATable: typeof import('ant-design-vue/es')['Table']
    ATag: typeof import('ant-design-vue/es')['Tag']
    MapContainer: typeof import('./src/components/MapContainer.vue')['default']
    Navbar: typeof import('./src/components/navbar.vue')['default']
    RouterLink: typeof import('vue-router')['RouterLink']
    RouterView: typeof import('vue-router')['RouterView']
    Sider: typeof import('./src/components/sider.vue')['default']
  }
}
