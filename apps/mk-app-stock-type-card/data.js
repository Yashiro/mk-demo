import moment from 'moment'

export function getMeta() {
	return {
		name: 'root',
		component: 'Layout',
		className: 'mk-app-stock-type-card',
		children: [{
			name: 'form',
			component: 'Form',
			className: 'mk-app-stock-type-card-form',
			children: [{
				name: 'codeItem',
				component: 'Form.Item',
				label: '编码',
				required: true,
				validateStatus: "{{data.other.error.code?'error':'success'}}",
				help: '{{data.other.error.code}}',
				children: [{
					name: 'code',
					component: 'Input',
					value: '{{data.form.code}}',
					onChange: "{{(e)=>$fieldChange('data.form.code',e.target.value)}}"
				}]
			},{
				name: 'nameItem',
				component: 'Form.Item',
				label: '名称',
				required: true,
				validateStatus: "{{data.other.error.name?'error':'success'}}",
				help: '{{data.other.error.name}}',
				children: [{
					name: 'name',
					component: 'Input',
					value: '{{data.form.name}}',
					onChange: "{{(e)=>$fieldChange('data.form.name',e.target.value)}}"
				}]
			}]
		}]
	}
}


export function getInitState() {
	var state = {
		data: {
			form: {
				code: '',
				name: '',
			},
			other: {
				error: {}
			}
		}
	}
	return state
}