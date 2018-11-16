const map = new Map([
	['task', [
        { type: 'text',             id: 'model',                 name: '模块'},
        { type: 'text',             id: 'serial',                name: '案号'},
        { type: 'text',             id: 'title',                 name: '标题'},
        { type: 'static_select',    id: 'process_definition',     name: '管制事项',      map_type: 'task_def'},
        { type: 'static_select',    id: 'task',           name: '当前节点',      map_type: 'flow_node',     url: '/flownodes'},
        { type: 'static_select',    id: 'branch',                name: '部门',         map_type: 'branch'},
        { type: 'remote_select',    id: 'user',                  name: '承办人',        data_key: 'data',          url: '/customers'},
        { type: 'remote_select',    id: 'agent',                 name: '代理人',        data_key: 'data',          url: '/customers'},
        { type: 'remote_select',    id: 'assistant',             name: '代理人助理',     data_key: 'data',          url: '/customers'},
        { type: 'remote_select',    id: 'first_reviewer',         name: '初审核人',       data_key: 'data',          url: '/customers'},
        { type: 'remote_select',    id: 'final_reviewer',         name: '复审人',         data_key: 'data',          url: '/customers'},
        { type: 'remote_select',    id: 'ipr',                   name: 'IPR',           data_key: 'data',          url: '/customers'},
        { type: 'remote_select',    id: 'customer',              name: '客户',           data_key: 'data',          url: '/customers'},
        { type: 'remote_select',    id: 'contact',               name: '联系人',           data_key: 'data',          url: '/contacts'},
        { type: 'date',             id: 'first_edition_deadline',name: '初稿期限'},
        { type: 'date',             id: 'filing_deadline',       name: '递交期限'},
        { type: 'date',             id: 'legal_deadline',        name: '官方绝限'},
        { type: 'date',             id: 'first_edition_time',    name: '初稿日'},
        { type: 'date',             id: 'internal_final_edition_time',name: '内部定稿日'},
        { type: 'date',             id: 'customer_edition_time', name: '返稿日'},
        { type: 'date',             id: 'customer_final_edition_time',name: '客户定稿日'},
        { type: 'date',             id: 'filing_time',           name: '递交日'},
        { type: 'date',             id: 'internal_drafting_period',name: '内部撰写时间'},
        { type: 'date',             id: 'internal_amending_period',name: '内部修改时间'},
        { type: 'date',             id: 'internal_reviewing_period',name: '内部审核时间'},
        { type: 'date',             id: 'customer_first_edition_period',name: '返稿时间'},
        { type: 'date',             id: 'customer_reviewing_period',name: '客户审核时间'},
        { type: 'date',             id: 'customer_amending_period',name: '客户审核修改时间'},
        { type: 'date',             id: 'application_date',        name: '申请日'},
        { type: 'text',             id: 'application_number',      name: '申请号'},
        { type: 'text',             id: 'internal_reviewing_times',name: '内部审核次数'},
        { type: 'text',             id: 'customer_reviewing_times',name: '客户审核次数'},
        { type: 'text',             id: 'technical_rank',         name: '技术评分'},
        { type: 'text',             id: 'claims_rank',            name: '权利要求评分'},
        { type: 'text',             id: 'spec_rank',              name: '说明书评分'},
        { type: 'text',             id: 'communication_rank',     name: '沟通交流评分'},
    ]],
    ['patent', [
        { type: 'text',         	id: 'serial',                name: '案号'},
        { type: 'text',         	id: 'agency_serial',         name: '事务所案号'},
        { type: 'text',         	id: 'english_title',         name: '英文名称'},
        { type: 'text',         	id: 'proposal_title',        name: '提案标题'},
        { type: 'text',         	id: 'start_year',            name: '首次年费年度'},
        { type: 'remote_select',	id: 'applicants',            name: '申请人',       url: 'applicants',    data_key: 'applicants',},
        { type: 'text',         	id: 'apn',                   name: '申请号'},
        { type: 'date',         	id: 'apd',                   name: '申请日',},
        { type: 'date',         	id: 'entrusting_time',       name: '委案时间'},
        { type: 'static_select',	id: 'type',                  name: '专利类型',     map_type: 'patent_type_strainer'},
        { type: 'static_select',	id: 'area',                  name: '申请地区',     map_type: 'area'},
        { type: 'static_select',	id: 'technical_field',       name: '技术领域',     map_type: 'technical_field'},
        { type: 'text',             id: 'title',                 name: '案件名称'},
        { type: 'date',             id: 'create_time',           name: '立案时间'},
        { type: 'text',             id: 'abstract',              name: '摘要'},
        { type: 'date',             id: 'public_date',           name: '公开日'},
        { type: 'text',             id: 'public_number',         name: '公开号'},
        { type: 'text',             id: 'proposal_serial',       name: '提案号'},
        // { type: 'select',       id: 'progress',                       name: '详细状态',},
        { type: 'static_select',    id: 'flownode',              name: '详细状态',     url: '/flownodes', map_type: 'flow_node'},
        { type: 'static_select',    id: 'legal_status',          name: '法律状态',     map_type: 'legal_status'},
        { type: 'remote_select',    id: 'inventors',             name: '发明人',       url: 'inventors', data_key: 'data',},
        { type: 'remote_select',    id: 'alias_inventors',       name: '送件发明人',   url: 'inventors', data_key: 'data',},
        { type: 'static_select',    id: 'tags',                  name: '标签',         map_type: 'tag',   url: '/tags' },
        { type: 'static_select',    id: 'branch',                name: '部门',         map_type: 'branch'},
        { type: 'static_select',    id: 'classification',        name: '技术分类',     map_type: 'classification'},
        { type: 'static_select',    id: 'products',              name: '产品',         map_type: 'product'},
        { type: 'static_select',    id: 'product_relevance',     name: '产品相关',     map_type: 'product_relevance',},
        { type: 'static_select',    id: 'level',                 name: '案件等级',     map_type: 'case_level'},
        { type: 'static_select',    id: 'agency_type',           name: '案件类型',     map_type: 'case_type',},
        { type: 'static_select',    id: 'ipr',                   name: '负责IPR',      map_type: 'ipr',    url: 'iprs'},
        { type: 'remote_select',    id: 'proposer',              name: '技术联系人',    data_key: 'members',  url: 'members'},
        { type: 'text',             id: 'priorities',            name: '优先权'},
        { type: 'text',         	id: 'das',                   name: 'DAS码'},
        { type: 'text',         	id: 'tech_rank',             name: '技术理解评分'},
        { type: 'text',         	id: 'draft_rank',            name: '撰写质量评分'},
        { type: 'text',         	id: 'service_rank',          name: '服务态度评分'},
        { type: 'text',         	id: 'negative_flag',         name: '特别评价'},
        { type: 'text',         	id: 'negative_comment',      name: '评价详情'},
        { type: 'static_select',	id: 'is_support',            name: '是否已申请资助',  map_type: 'bool'}, //是否已申请资助
        { type: 'remote_select',    id: 'agency',                name: '代理机构',       url: '/agencies',    data_key: 'agencies'}, //代理机构
        { type: 'remote_select',    id: 'agent',                 name: '代理人',         url: '/users',data_key: 'members'}, //代理人
        { type: 'date',          	id: 'pre_exam_ok_date',                 name: '初审合格日'},
        { type: 'date',          	id: 'sub_exam_start_date',              name: '进入实审日'},
        { type: 'date',          	id: 'sub_exam_start_date',              name: '进入实审日'},
        { type: 'date',          	id: 'issue_date',                       name: '公告日'},
        { type: 'text',         	id: 'issue_number',                     name: '公告号'},
        { type: 'text',        	 	id: 'main_ipc',                         name: '主国际分类号'},
        { type: 'text',         	id: 'ipr_review_times',                 name: 'IPR审核次数'},
        { type: 'date',          	id: 'pct_apd',                          name: '国际申请日'},
        { type: 'date',          	id: 'pct_19_expire_date',               name: 'PCT19条修改期限'},
        { type: 'date',          	id: 'pct_national_stage_expire_date',   name: 'PCT进入国家阶段期限'},
        { type: 'date',         	id: 'pct_pre_exam_expire_date',         name: 'PCT国际初步审查期限'},
        { type: 'date',         	id: 'pct_search_date',                  name: '国际检索日期'},
        { type: 'date',         	id: 'priority_expire_date',             name: '优先权届满期限'},
        { type: 'text',         	id: 'pct_no',                           name: '国际申请号'},
        { type: 'date',         	id: 'pct_priority_date',                name: '国际优先权日'},
        { type: 'date',         	id: 'pct_public_date',                  name: '国际公开日'},
        { type: 'static_select',    id: 'pct_public_language',              name: '国际公开语言',   map_type: 'language'},
        { type: 'text',         	id: 'pct_public_no',                    name: '国际公开号'},
        { type: 'text',         	id: 'board_number',                     name: '复审委内编号'},
        { type: 'text',         	id: 'agent_amending_period',            name: '代理人修改时间'},
        { type: 'static_select',    id: 'is_biological',                  	name: '是否与生物相关',     map_type: 'bool'},
        { type: 'static_select',     id: 'is_division',                   	name: '是否是分案申请',},
        { type: 'static_select',     id: 'is_exam_request',                	name: '是否提出实质审查请求',     map_type: 'bool'},
        { type: 'static_select',     id: 'is_genetic',                     	name: '是否依赖于遗传资源',     map_type: 'bool'},
        { type: 'static_select',     id: 'is_leakage',                    	name: '是否不丧失新颖性公开',     map_type: 'bool'},
        { type: 'static_select',     id: 'is_pre_public',                 	name: '是否提前公开',     map_type: 'bool'},
        { type: 'static_select',     id: 'is_priority',                   	name: '是否要求优先权',     map_type: 'bool'},
        { type: 'static_select',     id: 'is_secure_check',               	name: '是否保密审查',     map_type: 'bool'},
        { type: 'static_select',     id: 'is_sequence',                      name: '是否有序列表',     map_type: 'bool'},
        { type: 'static_select',     id: 'is_utility',                    	name: '是否同实用新型/发明',     map_type: 'bool'},
        { type: 'date',             id: 'ipr_final_edition_time',        	name: 'IPR定稿时间'}, //IPR定稿时间
        { type: 'date',             id: 'active_supplement_expire_date', 	name: '主动修改期限'},
        { type: 'text',         	id: 'final_ipr_rank',                	name: 'IPR定稿评分'},//IPR定稿评分
        { type: 'text',         	id: 'group_number',                  	name: '群组号码'},//群组号码
        { type: 'text',         	id: 'family_number',                 	name: '专利族号码'},//专利族号码
        { type: 'text',         	id: 'project_name',                   	name: '项目名称'},//研发项目名称
        { type: 'text',         	id: 'project_serial',                	name: '项目编号'},//研发项目编号
        { type: 'text',         	id: 'remark',                        	name: '备注'},
        { type: 'remote_select',    id: 'awards',                           name: '专利奖',       data_key: 'awards',    url: '/api/award'},
        { type: 'static_select',    id: 'abbr',                          name: '部门简称',         map_type: 'abbr',      url: '/abbr'},
    ]],
    /* 申请人 */
    ['applicants', [
        { type: 'static_select',    id: 'applicant_type',        name: '申请人类型',map_type: 'applicant_type'},
        { type: 'remote_select',    id: 'customer',              name: '客户',           data_key: 'data',          url: '/customers'},
        { type: 'text',         	id: 'name',                  name: '申请人姓名'},
        { type: 'static_select',    id: 'citizenship',           name: '国籍',      map_type: 'area'},
        { type: 'text',             id: 'identity',              name: '证件号码'},
        { type: 'text',             id: 'postcode',              name: '邮编'},
        { type: 'text',             id: 'email_address',         name: '邮箱'},
        { type: 'text',             id: 'phone_number',          name: '电话号码'},
        { type: 'static_select',    id: 'residence',             name: '住所所在地',      map_type: 'area'},
        { type: 'text',             id: 'address',               name: '详细地址'},
        { type: 'static_select',    id: 'is_fee_discount',       name: '费用备案',     map_type: 'fee_discount'},
        { type: 'text',             id: 'english_name',          name: '英文姓名'},
        { type: 'text',             id: 'english_address',       name: '英文地址'},
        { type: 'static_select',    id: 'is_default',            name: '是否默认申请人',     map_type: 'bool'},
    ]],
    /* 发明人 */
    ['inventors', [
        { type: 'text',             id: 'name',                  name: '姓名'},
        { type: 'text',             id: 'title',                 name: '尊称',           data_key: 'data',          url: '/customers'},
        { type: 'remote_select',    id: 'customer',              name: '所属客户',           data_key: 'data',          url: '/customers'},
        { type: 'static_select',    id: 'citizenship',           name: '国籍',      map_type: 'area'},
        { type: 'text',             id: 'email_address',         name: '邮箱'},
        { type: 'text',             id: 'phone_number',          name: '电话号码'},
        { type: 'text',             id: 'identity',              name: '证件号码'},
        { type: 'static_select',    id: 'is_publish_name',       name: '是否公开姓名',     map_type: 'bool'},
        { type: 'text',             id: 'first_name',            name: '英文名'},
        { type: 'text',             id: 'last_name',             name: '英文姓'},
        { type: 'text',         	id: 'remark',                name: '备注'},
    ]],
    /* 联系人 */
    ['contacts', [
        { type: 'text',             id: 'name',                  name: '姓名'},
        { type: 'text',             id: 'title',                 name: '尊称'},
        { type: 'remote_select',    id: 'customer',              name: '所属客户',           data_key: 'data',          url: '/customers'},
        { type: 'static_select',    id: 'contact_type',          name: '类型',      map_type: 'contacts_type'},
        { type: 'text',             id: 'email_address',         name: '邮箱'},
        { type: 'text',             id: 'phone_number',          name: '电话号码'},
        { type: 'text',         	id: 'remark',                name: '备注'},
        { type: 'text',             id: 'address',               name: '地址'},
    ]],
    /* 客户备注 */
    ['remarks', [
        { type: 'static_select',    id: 'type',                  name: '类型',   map_type: 'remark_type'},
        { type: 'remote_select',    id: 'user',                  name: '备注人',           data_key:"data"},
        { type: 'date',             id: 'creation_time',         name: '备注时间'},
        { type: 'text',             id: 'content',               name: '备注内容'},
    ]],
    /* 合同管理 */
    ['invoice_targets', [
        { type: 'remote_select',    id: 'customer',              name: '客户',           data_key: 'data',          url: '/customers'},
        { type: 'static_select',    id: 'target_type',           name: '主体类型',      map_type: 'target_type'},
        { type: 'text',         	id: 'name',                  name: '单位名称'},
        { type: 'text',         	id: 'identity',              name: '纳税人识别号'},
        { type: 'text',         	id: 'address',               name: '注册地址'},
        { type: 'text',         	id: 'phone_number',          name: '联系电话'},
        { type: 'text',         	id: 'bank',                  name: '开户行'},
        { type: 'text',         	id: 'account',               name: '银行账户'},
        { type: 'text',         	id: 'remark',                name: '备注'},
    ]],
    /* 开票信息 */
    ['contracts', [
        { type: 'remote_select',    id: 'customer',              name: '客户',           data_key: 'data',          url: '/customers'},
        { type: 'remote_select',    id: 'contact',               name: '联系人',           data_key: 'data',          url: '/contacts'},
        { type: 'text',             id: 'serial',                name: '合同编号'},
        { type: 'static_select',    id: 'type',                  name: '合同类型',      map_type: 'contract_type'},
        { type: 'static_select',    id: 'is_effective',          name: '状态',      map_type: 'bool'},
        { type: 'date',             id: 'signing_date',          name: '签订日期'},
        { type: 'date',             id: 'expire_date',           name: '届满日期'},
        { type: 'text',         	id: 'remark',                name: '备注'},
    ]],
    /* 待请费用 */
    ['fees', [
        { type: 'remote_select',    id: 'user.customer.name',              name: '客户',           data_key: 'data',          url: '/customers'},
        { type: 'text',    id: 'title',        name: '标题'},
        { type: 'text',    id: 'application_number',        name: '申请号'},
        { type: 'date',    id: 'application_date',        name: '申请日'},
        { type: 'remote_select',    id: 'serial',              name: '案号',           data_key: 'projects',          url: '/projects'},
        { type: 'static_select',    id: 'area',           name: '申请国家',      map_type: 'area'},
        { type: 'text',    id: 'order.serial',        name: '订单号'},
        { type: 'static_select',    id: 'fee_code.name',              name: '费用名称',           map_type:"fee_code"},
        { type: 'static_select',    id: 'fee_code',              name: '费用类型',           map_type:"fee_type"},
        { type: 'static_select',    id: 'policy',              name: '费用策略',           map_type:"policy"},
        { type: 'static_select',    id: 'currency',        name: '币别',map_type: 'currency'},
        { type: 'date',    id: 'deadline',        name: '费用期限'},
        { type: 'static_select',    id: 'status',              name: '费用状态',           map_type:"fee_status"},
        { type: 'static_select',    id: 'payment_request_timing',              name: '请款时机',           map_type:"payment_request_timing"},
        { type: 'text',         	id: 'remark',                name: '备注'},
    ]],
    /* 请款管理 */
    ['invoices', [
        { type: 'remote_select',    id: 'serial',        name: '请款单号', data_key:"data",url:"/invoices"},
        { type: 'remote_select',    id: 'creator_user',        name: '创建人', data_key:"data"},
        { type: 'remote_select',    id: 'user',        name: '请款对象', data_key:"data"},
        { type: 'date',    id: 'creation_time',        name: '创建时间'},
        { type: 'text',    id: 'amount',        name: '金额'},
        { type: 'static_select',    id: 'currency',        name: '币别',map_type: 'currency'},
        { type: 'text',    id: 'rmb_amount',        name: '人民币'},
        { type: 'date',    id: 'request_time',        name: '请款时间'},
        { type: 'date',    id: 'deadline',        name: '回款期限'},
        { type: 'date',    id: 'payment_time',        name: '回款时间'},
        { type: 'text',    id: 'received_amount',        name: '回款金额'},
        { type: 'remote_select',    id: 'creator_user_name',        name: '回款确认用户',data_key: 'data'},
        { type: 'date',    id: 'confirmation_time',        name: '回款确认时间'},
        { type: 'static_select',    id: 'status',        name: '请款单状态',map_type:"invoice_status"},
        { type: 'static_select',    id: 'is_voucher_uploaded',        name: '票据已上传',map_type: 'bool'},
        { type: 'text',    id: 'express',        name: '快递单号'},

    ]],
    /* 回款管理 */
    ['received_payments', [
        { type: 'remote_select',    id: 'invoice.customer.name',              name: '客户',           data_key: 'data',          url: '/customers'},
        { type: 'remote_select',    id: 'invoice',        name: '请款单号', data_key:"data",url:"/invoices"},
        { type: 'remote_select',    id: 'payment_account',        name: '回款账户', data_key:"data",url:"/payment_accounts"},
        { type: 'date',    id: 'received_date',        name: '回款时间'},
        { type: 'text',    id: 'amount',        name: '回款金额'},
        { type: 'static_select',    id: 'currency',        name: '币别',map_type: 'currency'},
        { type: 'text',         	id: 'remark',                name: '备注'},

    ]],
    /* 发票管理 */
    ['invoice_request', [
        { type: 'remote_select',    id: 'customer',              name: '客户',           data_key: 'data',          url: '/customers'},
        { type: 'remote_select',    id: 'invoice',        name: '账单编号', data_key:"data",url:"/invoices"},
        { type: 'remote_select',    id: 'invoice_target',        name: '开票主体', data_key:"data",url:"/invoice_targets"},
        { type: 'static_select',    id: 'status',           name: '申请国家',      map_type: 'area'},
        { type: 'text',         	id: 'remark',                name: '备注'},
        { type: 'text',    id: 'amount',        name: '金额'},

    ]]
]);
export {map};