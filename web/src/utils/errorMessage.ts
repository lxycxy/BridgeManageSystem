import { notification } from "ant-design-vue"
    
export function error_message (message: string, type:string) {
        if (type === 'error') {
            notification.error({
                message:'操作失败',
                description:message,
                duration: 2
            })
        } else if (type === 'success'){
            notification.success({
                message:'操作成功',
                description: message,
                duration: 2
            })
        } else if (type === 'warn') {
            notification.warning({
                message:'警告',
                description: message,
                duration: 2
            })
        } else {
            notification.error({
                message:'操作失败',
                description:message,
                duration: 2
            })
        }
}

