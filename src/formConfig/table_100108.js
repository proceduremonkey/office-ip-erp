// 其它证明文件
import {vm as upload_vm} from '../formTemplate/Upload'

let rule = [
    {
        type: "input",title: "申请人",field: "patent_number",value: "",
    },
    upload_vm({label:"图片",url:"/url",tip:"上传图片",type:"custom",field:"files",common:true}),

]
const content = {
    rule    // rule字段名称不能更改
}

export default content
