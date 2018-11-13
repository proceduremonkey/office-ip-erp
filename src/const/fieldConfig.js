const config = [
	[
		'patent', [{"label":"案号","value":"serial"},{"label":"群组号","value":"group_number"},{"label":"专利族号","value":"family_number"},{"label":"事务所案号","value":"agency_serial"},{"label":"申请人","value":"applicants"},{"label":"申请号","value":"apn"},{"label":"申请日","value":"apd"},{"label":"专利标题","value":"title"},{"label":"地区","value":"area"},{"label":"当前状态","value":"progress"},{"label":"IPR","value":"ipr"},{"label":"提案号","value":"proposal_serial"},{"label":"专利类型","value":"type"},{"label":"专利摘要","value":"abstract"},{"label":"公开日","value":"public_date"},{"label":"公开号","value":"public_number"},{"label":"初审合格日","value":"pre_exam_ok_date"},{"label":"进入实审日","value":"sub_exam_start_date"},{"label":"公告日","value":"issue_date"},{"label":"公告号","value":"issue_number"},{"label":"主国际分类号","value":"main_ipc"},{"label":"国际申请日","value":"pct_apd"},{"label":"国际申请号","value":"pct_no"},{"label":"国际优先权日","value":"pct_priority_date"},{"label":"国际公开日","value":"pct_public_date"},{"label":"国际公开语言","value":"pct_public_language"},{"label":"国际公开号","value":"pct_public_no"},{"label":"复审委内编号","value":"board_number"},{"label":"说明书字数","value":"words"},{"label":"费用","value":"fees"},{"label":"代理机构","value":"agency"},{"label":"发明人","value":"inventors"},{"label":"标签","value":"tags"},{"label":"部门名称","value":"branch"},{"label":"技术分类","value":"classification"},{"label":"优先权","value":"priorities"},{"label":"产品名称","value":"products"},{"label":"相关案件","value":"relates"},{"label":"委案时间","value":"entrusting_time"},{"label":"附件","value":"attachments"},{"label":"创建时间","value":"create_time"},{"label":"奖励等级","value":"bonus_level"},{"label":"案件等级","value":"level"},{"label":"返发明人稿时间","value":"first_edition_to_inventor_time"},{"label":"发明人审核时间","value":"inventor_review_time"},{"label":"发明人审核次数","value":"inventor_review_times"},{"label":"发明人评分","value":"inventor_rank"},{"label":"返IPR稿时间","value":"first_edition_to_ipr_time"},{"label":"IPR定稿时间","value":"ipr_final_edition_time"},{"label":"IPR审核次数","value":"ipr_review-times"},{"label":"IPR首次评分","value":"first_ipr_rank"},{"label":"IPR终稿评分","value":"final_ipr_rank"},{"label":"代理人撰稿耗时","value":"agent_drafting_period"},{"label":"发明人审核耗时","value":"inventor_review_period"},{"label":"IPR审核耗时","value":"ipr_review_period"},{"label":"代理人修改耗时","value":"amending_period"},{"label":"备注","value":"remark"},{"label":"申请策略","value":"application_strategy"},{"label":"实审时机","value":"subexam_timing"},{"label":"创新点描述","value":"innovation_introduction"},{"label":"新申请的申请策略","value":"core_concepts"},{"label":"决定要申请专利的原因","value":"decision_reason"},{"label":"技术重要性","value":"importance"},{"label":"是否容易回避","value":"avoidability"},{"label":"是否容易获取侵权证据","value":"evidence_discovery"},{"label":"对产品盈利的贡献度","value":"profitability"},{"label":"卖点相关性","value":"selling_point"},{"label":"卖点相关的技术","value":"selling_point_technique"},{"label":"对手使用情况","value":"competitor_usage"},{"label":"专利实施情况","value":"application"},{"label":"市场推广或宣传上的价值","value":"marketing_value"},{"label":"项目名称","value":"project_name"},{"label":"项目代号","value":"project_serial"},{"label":"是否申请资助","value":"is_support"},{"label":"是否生物相关","value":"is_biological"},{"label":"是否分案申请","value":"is_division"},{"label":"是否提出实审请求","value":"is_exam_request"},{"label":"是否遗传资源相关","value":"is_genetic"},{"label":"是否有泄漏","value":"is_leakage"},{"label":"是否提前公开","value":"is_pre_public"},{"label":"是否要求优先权","value":"is_priority"},{"label":"是否保密审查","value":"is_secure_check"},{"label":"是否有序列表","value":"is_sequence"},{"label":"是否发明/新型同日申请","value":"is_utility"}] 
	],
]

const fieldExceptMap = new Map([
	['patent', 'userPatentFieldExcept'],
	['patentList', 'userPatentFieldExcept'],
])

const strainerConfig = [
	['process',[
		{ "name": "模块", "id": "model", },
		{ "name": "案件类型", "id": "category", "default": true},
		{ "name": "案件子类型", "id": "type",},
		{ "name": "管制事项", "id": "process_definition",},
		{ "name": "当前节点", "id": "process_action",},
		{ "name": "承办人", "id": "user",},
		{ "name": "代理人", "id": "agent",},
		{ "name": "代理人助理", "id": "assistant",},
		{ "name": "初审核人", "id": "first_reviewer",},
		{ "name": "复审人", "id": "final_reviewer",},
		{ "name": "所属部门", "id": "organization_unit",},
		{ "name": "客户", "id": "customer",},
		{ "name": "IPR", "id": "ipr",},
		{ "name": "联系人", "id": "contact",},
		{ "name": "初稿期限", "id": "first_edition_deadline",},
		{ "name": "递交期限", "id": "filling_deadline",},
		{ "name": "官方绝限", "id": "legal_deadline",},
		{ "name": "初稿日", "id": "first_edition_time",},
		{ "name": "内部定稿日", "id": "internal_final_edtion_time",},
		{ "name": "返稿日", "id": "customer_edition_time",},
		{ "name": "客户定稿日", "id": "customer_final_edition_time",},
		{ "name": "递交日", "id": "filling_time",},
		{ "name": "申请日", "id": "application_date",},
	]],
    ['applicants',[
        { "name": "客户", "id": "customer", "default": true},
    ]],
    ['invoices',[
        { "name": "客户", "id": "customer", "default": true},
    ]]
]
export {config, fieldExceptMap, strainerConfig}