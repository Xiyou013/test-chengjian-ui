<template>
    <div class="cj-ui">
        <div class="pilot">
            <c-space direction="vertical" class="t-demo-autocomplete-option">
                <!-- 使用插槽自定义下拉选项 -->
                <c-auto-complete v-model="value2" :options="options2"
                    :popup-props="{ overlayClassName: 't-demo-autocomplete-option-list' }" placeholder="使用插槽自定义联想词选项内容">
                    <template #option="{ option }">
                        <div class="custom-option">
                            <img :src="option.avatar" alt="城建 UI" />
                            <div class="custom-option__main">
                                <c-highlight-option :content="option.text" :keyword="value2" />
                                <small class="description">{{ option.description }}</small>
                            </div>
                        </div>
                    </template>
                </c-auto-complete>
            </c-space>
        </div>
        <div class="pilot">
            <c-space class="c-space-style">
                <c-cascader v-model="value" :options="options" multiple clearable :max="3" />
            </c-space>
        </div>
        <div class="pilot">
            <c-space direction="vertical">
                <p>选中值: {{ checked }}</p>
                <!-- name 非必需 -->
                <c-checkbox-group v-model="checked" :options="['选项一', '选项二', '选项三']" name="city"></c-checkbox-group>
                <c-button size="small" @click="checked = ['选项二']">重置</c-button>
            </c-space>
        </div>
        <div class="pilot">
            <c-space direction="vertical" size="small">
                <p>默认（单色 + 线性渐变）</p>
                <c-color-picker v-model="color1" format="CSS" />
            </c-space>
        </div>
        <div class="pilot">
            <c-space direction="vertical">
                <c-date-range-picker :popup-props="popupProps" allow-input clearable format="YYYY-MM-DD HH:mm:ss"
                    :default-time="['00:00:00', '22:22:22']" @pick="onPick" @change="onChange"
                    @month-change="onMonthChange" @year-change="onYearChange" />
            </c-space>
        </div>
        <div class="pilot">
            <div class="form-demo-content">
                <c-form ref="form" :data="formData" :rules="rules" scroll-to-first-error="smooth" @reset="onReset"
                    @submit="onSubmit">
                    <c-form-item label="用户名" help="这是用户名字段帮助说明" name="account">
                        <c-input v-model="formData.account"></c-input>
                    </c-form-item>

                    <c-form-item label="个人简介" help="一句话介绍自己" name="description">
                        <c-input v-model="formData.description"></c-input>
                    </c-form-item>

                    <c-form-item label="密码" name="password">
                        <c-input v-model="formData.password" type="password"></c-input>
                    </c-form-item>

                    <c-form-item label="邮箱" name="email">
                        <c-auto-complete v-model="formData.email" :options="emailOptions" filterable></c-auto-complete>
                    </c-form-item>

                    <c-form-item label="性别" name="gender">
                        <c-radio-group v-model="formData.gender">
                            <c-radio value="male">男</c-radio>
                            <c-radio value="femal">女</c-radio>
                        </c-radio-group>
                    </c-form-item>

                    <c-form-item label="课程" name="course">
                        <c-checkbox-group v-model="formData.course" :options="courseOptions"></c-checkbox-group>
                    </c-form-item>

                    <c-form-item label="学院" name="college">
                        <c-select v-model="formData.college" class="demo-select-base" clearable>
                            <c-option v-for="(item, index) in options_form" :key="index" :value="item.value"
                                :label="item.label">
                                {{ item.label }}
                            </c-option>
                        </c-select>
                    </c-form-item>

                    <c-form-item label="入学时间" name="date" :rules="[
                        {
                            date: { delimiters: ['/', '-', '.'] },
                            message: '日期格式有误',
                        },
                    ]">
                        <c-input v-model="formData.date"></c-input>
                    </c-form-item>

                    <c-form-item label="个人网站" name="content.url">
                        <c-input v-model="formData.content.url"></c-input>
                    </c-form-item>

                    <c-form-item>
                        <c-space size="small">
                            <c-button theme="primary" type="submit"> 提交 </c-button>
                            <c-button theme="default" variant="base" type="reset">
                                重置
                            </c-button>
                            <c-button theme="default" variant="base" @click="handleClear">
                                清空校验结果
                            </c-button>
                            <c-button theme="default" variant="base" @click="clearFieldsValidateResult">
                                清除指定字段的校验结果
                            </c-button>
                        </c-space>
                    </c-form-item>
                </c-form>
            </div>
        </div>
        <div class="pilot">
            <c-space direction="vertical">
                <c-input />

                <c-input v-model="input" placeholder="请输入内容（有默认值）" @enter="onEnter" @change="onChange_input" />

                <!-- label/suffix/suffixIcon 支持同名插槽 -->
                <c-input label="价格：" suffix="元" type="number" @change="onNumberChange" @focus="onFocus"
                    @blur="onBlur" />

                <c-input placeholder="Search Input" clearable>
                    <template #suffixIcon>
                        <c-icon :icon="Search" :style="{ cursor: 'pointer' }" />
                    </template>
                </c-input>
            </c-space>
        </div>
        <div class="pilot">
            <c-space class="adornment-select" direction="vertical">
                <c-input-adornment :prepend="protocolSelect">
                    <c-input placeholder="请输入内容" />
                </c-input-adornment>

                <c-input-adornment :append="tldSelect">
                    <c-tag-input placeholder="请输入内容" />
                </c-input-adornment>

                <c-input-adornment :prepend="protocolSelect" :append="tldSelect">
                    <c-select :options="['tencent', 'qq', 'cloud.tencent'].map((value) => ({
                        label: value,
                        value,
                    }))
                        " default-value="tencent" />
                </c-input-adornment>
            </c-space>
        </div>
        <div class="pilot">
            <c-space class="row-steppers" direction="vertical">
                <c-input-number v-model="value1" :step="0.1" :max="5" auto-width />

                <!-- 失去焦点时，规范超出范围的数字 -->
                <c-input-number v-model="decimalValue" :step="0.18" :max="5" :allow-input-over-limit="false"
                    style="width: 200px" />

                <!-- 数字超出范围仅提醒，不代用户做任何事情 -->
                <c-input-number v-model="value2_number" theme="row" :max="15" :min="-2" :disabled="false" :tips="tips"
                    suffix="个" style="width: 250px" @change="handleChange" @validate="onValidate" @focus="handleFocus"
                    @blur="handleBlur" @keydown-enter="handleKeydownEnter" @keydown="handleKeydown" @keyup="handleKeyup"
                    @keypress="handleKeypress"></c-input-number>
            </c-space>
        </div>
        <div class="pilot">
            <c-space class="c-space-style">
                <c-tag-input v-model="tags" placeholder="最多只能输入 3 个标签" :max="3" @enter="onEnter_tag" />
            </c-space>
        </div>
        <div class="pilot">
            <c-space direction="vertical">
                <c-radio-group v-model="value_radio" allow-uncheck name="city" :options="options_radio"
                    @change="onChange_radio"></c-radio-group>
            </c-space>
        </div>
        <div class="pilot">
            <c-space direction="vertical">
                <c-range-input status="success" />
                <c-range-input status="warning" />
                <c-range-input status="error" />
            </c-space>
        </div>
        <div class="pilot">
            <c-space direction="vertical">
                <!-- 方式一：直接传 options 数据，比插槽的方式更简单 -->
                <c-select v-model="value1_select" :options="options_select" placeholder="请选择" filterable />

                <!-- 方式二：使用插槽节点 -->
                <c-select v-model="value2_select" placeholder="请选择" filterable>
                    <c-option-group v-for="(list, index) in options_select" :key="index"
                        :label="typeof list.group === 'object' ? list.group.label : list.group" divider>
                        <c-option v-for="item in list.children" :key="item.value" :value="item.value"
                            :label="item.label">
                            {{ item.label }}
                        </c-option>
                    </c-option-group>
                </c-select>
            </c-space>
        </div>
        <div class="pilot">
            <c-space direction="vertical" class="tdesign-demo-select-input-custom-tag">
                <!-- 多选，第一种方式：使用 tag 插槽定义选中的某一项的内容，也可使用同名渲染函数 props.tag -->
                <c-select-input :value="selectValue2" clearable placeholder="Please Select" multiple
                    @tag-change="onTagChange2">
                    <template #tag="{ value }">
                        <span class="displaySpan">
                            <c-icon :icon="Monitor" size="1em" class="t-icon" />
                            {{options_selectInput.find((item) => item.value === value)?.label ?? value}}
                        </span>
                    </template>
                    <template #panel>
                        <c-checkbox-group v-if="options_selectInput.length" :value="selectValue2"
                            :options="options_selectInput" class="tdesign-demo__panel-options-multiple"
                            @change="onCheckedChange" />
                        <div v-else class="tdesign-demo__select-empty-multiple">暂无数据</div>
                    </template>
                </c-select-input>
            </c-space>
        </div>
        <div class="pilot">
            <div class="block">
                <c-slider v-model="value2_slider" range :label="true" :input-number-props="inputNumberProps" />
            </div>
        </div>
        <div class="pilot">
            <c-space>
                <c-switch v-model="checked1" size="large"></c-switch>
                <c-switch v-model="checked2" size="large" loading></c-switch>
                <c-switch size="large" disabled></c-switch>
            </c-space>
        </div>
        <div class="pilot">
            <c-space direction="vertical">
                <c-textarea v-model="value2" placeholder="请输入文案，高度可自适应；autosize=true" name="description"
                    :autosize="true" />
                <c-textarea v-model="value3" placeholder="请输入文案，高度可自适应，最小3行，最大5行；autosize={minRows: 3, maxRows: 5}"
                    name="description" :autosize="{ minRows: 3, maxRows: 5 }" />
            </c-space>
        </div>
        <div class="pilot">
            <div>
                <c-transfer v-model="targetValue" :data="data" :target-draggable="true" target-sort="push"
                    @change="onChange_transfer" @checked-change="handleCheckedChange" />
            </div>
        </div>
        <div class="pilot">
            <c-time-range-picker v-model="time" class="demos" clearable format="HH:mm:ss" allow-input
                @pick="handleRangePick" />
        </div>
        <div class="pilot">
            <c-space break-line class="tree-select-values">
                <c-tree-select v-model="mulValue" :data="options_treeSelect" multiple clearable filterable
                    placeholder="请选择">
                    <template #valueDisplay="{ value: valueDisplay, onClose }">
                        <c-tag v-for="(item, index) in valueDisplay" :key="index" closable max-width="100%"
                            :on-close="() => onClose(index)">
                            {{ item.label }}({{ item.value }})
                        </c-tag>
                    </template>
                </c-tree-select>
            </c-space>
        </div>
        <div class="pilot">
            <div class="tdesign-demo-upload t-upload">
                <c-button variant="outline" @click="upload">
                    <template #icon>
                        <c-icon :icon="CloudUpload" size="1em" class="t-icon" />
                    </template>
                    点击上传
                </c-button>
                <br /><br />
                <!-- :request-method="mockUpload": 模拟成功上传; action="/__cj_demo/upload": 真实上传路径-->
                <c-upload ref="uploadRef" v-model="files" :request-method="mockUpload" draggable theme="custom"
                    @fail="handleFail" @success="handleSuccess" @progress="onProgress">
                    <template #dragContent="params">
                        <ul v-if="files && files.length" style="padding: 0">
                            <li v-for="file in files" :key="file.name" style="list-style-type: none">{{ file.name }}
                            </li>
                        </ul>
                        <template v-else>
                            <p v-if="params && params.dragActive">释放鼠标</p>
                            <c-button v-else-if="progress < 1">自定义拖拽区域</c-button>
                        </template>
                        <c-button v-if="files && files.length" size="small" style="margin-top: 36px">更换文件</c-button>
                        <!-- <span>数据状态：{{params}}</span> -->
                    </template>
                </c-upload>
            </div>
        </div>
        <div class="pilot"></div>
        <div class="pilot"></div>
        <div class="pilot"></div>
    </div>
</template>

<script setup lang="tsx">
import { ref, computed, reactive } from "vue";
import {
    CAutoComplete, CHighlightOption, CSpace, CCascader, CCheckboxGroup, CButton, CColorPicker,
    CDateRangePicker, CForm, CFormItem, CInput, COption, CRadio, CRadioGroup, CSelect, MessagePlugin,
    CIcon, CInputAdornment, CTagInput, CInputNumber, CRangeInput, COptionGroup, CSelectInput,
    CTag, CSlider, CSwitch, CTextarea, CTransfer, CTimeRangePicker, CTreeSelect, CUpload
} from "@chengjian/foundation-web";
import type {
    AutoCompleteProps, CascaderProps, DateRangePickerProps, FormInstanceFunctions,
    FormProps, CheckboxGroupProps, ButtonProps, InputProps, InputAdornmentProps, InputNumberProps,
    TagInputProps, RadioGroupProps, CSelectInputProps, CCheckboxGroupProps, CSliderProps,
    CTransferProps, CTimeRangePickerProps, CTreeSelectProps, UploadInstanceFunctions, CUploadProps, CButtonProps

} from "@chengjian/foundation-web";
import { Search, Monitor, CloudUpload } from "@lucide/vue";

import wordmark from "@chengjian/foundation-web/media/autocomplete-wordmark.png";

const value2 = ref("");
const options2 = ref<AutoCompleteProps["options"]>([
    {
        label: "第一个默认联想词",
        description: "这是关于联想词的描述。使用插槽渲染",
        avatar: wordmark,
    },
    {
        label: "第二个默认联想词",
        description: "这是关于联想词的描述。使用插槽渲染",
        avatar: wordmark,
    },
    {
        label: "第三个默认联想词",
        description: "这是关于联想词的描述。使用插槽渲染",
        avatar: wordmark,
    },
]);

const value = ref([]);
const options: CascaderProps["options"] = [
    {
        label: "选项一",
        value: "1",
        children: [
            {
                label: "子选项一",
                value: "1.1",
            },
            {
                label: "子选项二",
                value: "1.2",
            },
            {
                label: "子选项三",
                value: "1.3",
            },
        ],
    },
    {
        label: "选项二",
        value: "2",
        children: [
            {
                label: "子选项一",
                value: "2.1",
            },
            {
                label: "子选项二",
                value: "2.2",
            },
        ],
    },
];

const checked = ref(["选项二"]);
const color1 = ref("#0052d9");

const onPick: DateRangePickerProps["onPick"] = (value, context) =>
    console.log("onPick:", value, context);
const onChange: DateRangePickerProps["onChange"] = (value, context) => {
    const dates = context.dayjsValue ?? [];
    console.log("onChange:", value, context);
    console.log(
        "timestamp:",
        dates.map((d) => d.valueOf()),
    );
    console.log(
        "YYYYMMDD:",
        dates.map((d) => d.format("YYYYMMDD")),
    );
};
const onMonthChange: DateRangePickerProps["onMonthChange"] = (context) => {
    console.log("onMonthChange:", context);
};
const onYearChange: DateRangePickerProps["onYearChange"] = (context) => {
    console.log("onYearChange:", context);
};
const popupProps = {
    overlayStyle: { maxWidth: "calc(100vw - 32px)" },
    overlayInnerStyle: {
        width: "auto",
        minWidth: 0,
        maxWidth: "calc(100vw - 32px)",
        overflowX: "auto",
        overscrollBehaviorX: "contain",
    },
} as const;

const form = ref<FormInstanceFunctions | null>(null);
const formData: FormProps["data"] = reactive({
    account: "",
    password: "",
    description: "",
    email: "",
    gender: "",
    college: "",
    date: "",
    content: {
        url: "",
    },
    course: [],
});
const emailSuffix = ["@qq.com", "@163.com", "@gmail.com"];
const emailOptions = computed<AutoCompleteProps["options"]>(() => {
    const emailPrefix = formData.email.split("@")[0];
    if (!emailPrefix) return [];
    return emailSuffix.map((suffix) => emailPrefix + suffix);
});
const courseOptions: CheckboxGroupProps["options"] = [
    {
        label: "语文",
        value: "1",
    },
    {
        label: "数学",
        value: "2",
    },
    {
        label: "英语",
        value: "3",
    },
    {
        label: "体育",
        value: "4",
    },
];
const options_form = [
    {
        label: "计算机学院",
        value: "1",
    },
    {
        label: "软件学院",
        value: "2",
    },
    {
        label: "物联网学院",
        value: "3",
    },
];
const rules: FormProps["rules"] = {
    account: [
        {
            required: true,
            message: "姓名必填",
        },
        {
            min: 2,
            message: "至少需要两个字符，一个中文等于两个字符",
        },
        {
            max: 10,
            message: "姓名字符长度超出",
        },
    ],
    description: [
        {
            validator: (val) => val.length >= 5,
            message: "至少 5 个字，中文长度等于英文长度",
        },
        {
            validator: (val) => val.length < 20,
            message: "不能超过 20 个字，中文长度等于英文长度",
        },
    ],
    password: [
        {
            required: true,
            message: "密码必填",
        },
        {
            len: 8,
            message: "请输入 8 位密码",
        },
        {
            pattern: /[A-Z]+/,
            message: "密码必须包含大写字母",
        },
    ],
    email: [
        {
            required: true,
            message: "邮箱必填",
        },
        {
            email: {
                ignore_max_length: true,
            },
            message: "请输入正确的邮箱地址",
        },
    ],
    gender: [
        {
            required: true,
            message: "性别必填",
        },
    ],
    course: [
        {
            required: true,
            message: "课程必填",
        },
        {
            validator: (val) => val.length <= 2,
            message: "最多选择 2 门课程",
        },
    ],
    "content.url": [
        {
            required: true,
            message: "个人网站必填",
        },
        {
            url: {
                protocols: ["http", "https", "ftp"],
                require_protocol: true,
            },
            message: "请输入正确的个人主页",
        },
    ],
};
const onReset: FormProps["onReset"] = () => {
    MessagePlugin.success("重置成功");
    console.log("formData", formData.value);
};
const onSubmit: FormProps["onSubmit"] = ({ validateResult, firstError }) => {
    if (validateResult === true) {
        MessagePlugin.success("提交成功");
    } else {
        console.log("Errors: ", validateResult);
        MessagePlugin.warning(firstError || "表单校验失败，请检查输入");
    }
};
const handleClear: ButtonProps["onClick"] = () => {
    form.value?.clearValidate();
};
const clearFieldsValidateResult: ButtonProps["onClick"] = () => {
    form.value?.clearValidate(["email", "course", "content.url"]);
    MessagePlugin.success("已清除邮箱、课程、个人网站等字段校验结果");
};

const input = ref("有默认值");
const onEnter: InputProps["onEnter"] = () => {
    console.log("trigger enter");
};
const onNumberChange: InputProps["onChange"] = (val, ctx) => {
    console.log(val, ctx);
};
const onBlur: InputProps["onBlur"] = (val, ctx) => {
    console.log("blur:", val, ctx);
};
const onChange_input: InputProps["onChange"] = (val) => {
    console.log(val);
};
const onFocus: InputProps["onFocus"] = (val, ctx) => {
    console.log("focus:", val, ctx);
};

const protocolSelect = ref<InputAdornmentProps["prepend"]>(() => (
    <CSelect
        autoWidth
        options={
            ["http://", "https://"].map((value) => ({
                label: value,
                value,
            }))
        }
        defaultValue="http://"
    />
));
const tldSelect = ref<InputAdornmentProps["append"]>(() => (
    <CSelect
        autoWidth
        options={
            [".com", ".cn", ".net", ".org"].map((value) => ({
                label: value,
                value,
            }))
        }
        defaultValue=".cn"
    />
));

const value1 = ref('');
const value2_number = ref(100);
const decimalValue = ref(3.41);
const error = ref<'exceed-maximum' | 'below-minimum' | undefined>(undefined);
const tips = computed<InputNumberProps['tips']>(() => {
    if (error.value === 'exceed-maximum') return 'number can not be exceed maximum';
    if (error.value === 'below-minimum') return 'number can not be below minimum';
    return undefined;
});
const onValidate: InputNumberProps['onValidate'] = (p) => {
    error.value = p.error;
};
const handleChange: InputNumberProps['onChange'] = (v, ctx) => {
    console.info('change', v, ctx);
};
const handleFocus: InputNumberProps['onFocus'] = (v, ctx) => {
    console.info('focus', v, ctx);
};
const handleBlur: InputNumberProps['onBlur'] = (v, ctx) => {
    console.info('blur', v, ctx);
};
const handleKeydownEnter: InputNumberProps['onEnter'] = (v, ctx) => {
    console.info('keydown-enter', v, ctx);
};
const handleKeydown: InputNumberProps['onKeydown'] = (v, ctx) => {
    console.info('keydown', v, ctx);
};
const handleKeyup: InputNumberProps['onKeyup'] = (v, ctx) => {
    console.info('keyup', v, ctx);
};
const handleKeypress: InputNumberProps['onKeypress'] = (v, ctx) => {
    console.info('keypress', v, ctx);
};

const tags = ref([]);
const onEnter_tag: TagInputProps['onEnter'] = (value, { inputValue }) => {
    if (value.length >= 3 && inputValue) {
        MessagePlugin.warning('最多只能输入 3 个标签!');
    }
};

const options_radio: RadioGroupProps['options'] = [
    {
        value: '1',
        label: '选项一',
        disabled: true,
    },
    {
        value: '2',
        label: '选项二',
    },
    {
        value: '3',
        label: '选项三',
    },
    {
        value: '4',
        label: () => '选项四',
    },
];
const value_radio = ref('');
const onChange_radio: RadioGroupProps['onChange'] = (checkedValues) => {
    console.log('checkedValues:', value.value, checkedValues);
};

interface CustomOptionInfo {
    group?:
    | string
    | {
        label: string;
    };
    divider?: boolean;
    label?: string;
    value?: number;
    children?: CustomOptionInfo[];
}
const options_select: CustomOptionInfo[] = [
    {
        group: '分组一',
        children: [
            {
                label: '选项一',
                value: 1,
            },
            {
                label: '选项二',
                value: 2,
            },
        ],
    },
    {
        group: '分组二',
        children: [
            {
                label: '选项三',
                value: 4,
            },
            {
                label: '选项四',
                value: 5,
            },
            {
                label: '选项五',
                value: 6,
            },
        ],
    },
    {
        group: '分组三',
        divider: true,
        children: [
            {
                label: '选项六',
                value: 7,
            },
            {
                label: '选项七',
                value: 8,
            },
            {
                label: '选项八',
                value: 9,
            },
        ],
    },
];
const value1_select = ref('');
const value2_select = ref('');

const options_selectInput = [
    {
        label: 'chengjian-vue',
        value: 1,
    },
    {
        label: 'chengjian-react',
        value: 2,
    },
    {
        label: 'chengjian-miniprogram',
        value: 3,
    },
    {
        label: 'chengjian-angular',
        value: 4,
    },
    {
        label: 'chengjian-mobile-vue',
        value: 5,
    },
    {
        label: 'chengjian-mobile-react',
        value: 6,
    },
];
const selectValue2 = ref<number[]>([1, 2]);
const onTagChange2: CSelectInputProps['onTagChange'] = (val) => {
    selectValue2.value = val.filter(
        (item): item is number => typeof item === 'number',
    );
};
// 直接 checkboxgroup 组件渲染输出下拉选项
const onCheckedChange: CCheckboxGroupProps['onChange'] = (val, { current, type }) => {
    console.log(current);
    selectValue2.value = val.filter(
        (item): item is number => typeof item === 'number',
    );
};

const value2_slider = ref([30, 70]);
const inputNumberProps: CSliderProps['inputNumberProps'] = {
    theme: 'column',
};

const checked1 = ref(true);
const checked2 = ref(true);
const value3 = ref('');

const list = [];
for (let i = 0; i < 20; i++) {
    list.push({
        value: i.toString(),
        label: `content${i + 1}`,
        disabled: i % 4 < 1,
    });
}
const targetValue = ref([]);
const data = ref<CTransferProps['data']>(list);
const handleCheckedChange: CTransferProps['onCheckedChange'] = ({ checked, sourceChecked, targetChecked, type }) => {
    console.log('handleCheckedChange', {
        checked,
        sourceChecked,
        targetChecked,
        type,
    });
};
const onChange_transfer: CTransferProps['onChange'] = (newTargetValue) => {
    console.log(newTargetValue);
};

const time = ref(['00:00:00', '23:59:59']);
const handleRangePick: CTimeRangePickerProps['onPick'] = (v) => {
    console.log('picked range time is', v);
};

const mulValue = ref(['shenzhen', 'guangzhou']);
const options_treeSelect: CTreeSelectProps['data'] = [
    {
        label: '广东省',
        value: 'guangdong',
        children: [
            {
                label: '广州市',
                value: 'guangzhou',
            },
            {
                label: '深圳市',
                value: 'shenzhen',
                children: [
                    {
                        label: '深圳市南山区海天二路33号腾讯滨海大厦',
                        value: 'Tencent',
                    },
                ],
            },
        ],
    },
    {
        label: '江苏省',
        value: 'jiangsu',
        children: [
            {
                label: '南京市',
                value: 'nanjing',
            },
            {
                label: '苏州市',
                value: 'suzhou',
            },
        ],
    },
];

const files = ref<CUploadProps['value']>([]);
const uploadRef = ref<UploadInstanceFunctions>();
const progress = ref(0);
const mockUpload: CUploadProps['requestMethod'] = async () => {
  // 模拟请求耗时
    await new Promise((resolve) => setTimeout(resolve, 500));

    return {
    status: 'success',
    response: {
      url: wordmark, // 组件要求的示例地址，并非上传后生成的地址
    },
    };
};
const upload: CButtonProps['onClick'] = () => {
    uploadRef.value?.triggerUpload();
};
const handleSuccess: CUploadProps['onSuccess'] = ({ file }) => {
    if (!file) return;
    MessagePlugin.success(`文件 ${file.name} 上传成功`);
};
const handleFail: CUploadProps['onFail'] = ({ file }) => {
    MessagePlugin.error(`文件 ${file.name} 上传失败`);
};
const onProgress: CUploadProps['onProgress'] = ({ percent }) => {
    console.log('进度：', percent);
    progress.value = percent;
};
</script>

<style lang="less" scoped>
.pilot {
    padding: 24px;
    background: white;
    border: 1px solid #e5e6eb;
    border-radius: 8px;
}

.c-space-style {
    width: 400px;
    height: auto;
}

p {
    font-size: 12px;
}

.demo-select-base {
    width: 300px;
}

.form-demo-scroll {
    max-width: 100%;
    min-width: 0;
    overflow-x: auto;
    overscroll-behavior-x: contain;
    scrollbar-width: thin;
}

.form-demo-content {
    min-width: 546px;
}

/* 表单项之间保留间距 */
.form-demo-content :deep(.t-form .t-form__item) {
    margin-bottom: 24px;
}

/* 控件和提示文字根据内容自动撑开 */
.form-demo-content :deep(.t-form__controls) {
    height: auto;
    overflow: visible;
}

/* 帮助文字与校验提示各自占一行 */
.form-demo-content :deep(.t-input__help),
.form-demo-content :deep(.t-input__extra),
.form-demo-content :deep(.t-form-item-tips) {
    position: static;
    display: block;
    height: auto;
    line-height: 1.5;
    white-space: normal;
    overflow-wrap: anywhere;
}

.adornment-select {
    width: max-content;
}

.adornment-select :deep(.t-space-item) {
    width: 100%;
}

.row-steppers,
.t-input-number {
    max-width: 100%;
}

.tdesign-demo__panel-options-multiple {
    width: 100%;
    padding: 0;
    display: flex;
    flex-direction: column;
    gap: 2px;
}

.tdesign-demo__panel-options-multiple .t-checkbox {
    display: flex;
    border-radius: 3px;
    line-height: 22px;
    cursor: pointer;
    padding: 3px 8px;
    color: var(--td-text-color-primary);
    transition: background-color 0.2s linear;
    white-space: nowrap;
    word-wrap: normal;
    overflow: hidden;
    text-overflow: ellipsis;
    margin: 0;
}

.tdesign-demo__panel-options-multiple .t-checkbox:hover {
    background-color: var(--td-bg-color-container-hover);
}
</style>

<style>
.t-demo-autocomplete-option-list {
    max-width: calc(100vw - 24px);
}

.t-demo-autocomplete-option-list .t-select-option {
    min-height: 50px;
    height: auto;
}

.t-demo-autocomplete-option-list .custom-option {
    display: flex;
    align-items: center;
}

.t-demo-autocomplete-option-list .custom-option>img {
    width: 120px;
    height: 50px;
    object-fit: contain;
    flex-shrink: 0;
}

.t-demo-autocomplete-option-list .custom-option__main {
    margin-left: 8px;
    min-width: 0;
}

.t-demo-autocomplete-option-list .custom-option .description {
    color: var(--td-gray-color-9);
}
</style>
