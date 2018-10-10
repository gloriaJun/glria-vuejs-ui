# Radio

## Examples
### Basic
<code-pen hash='EdZzOj' :height="300"></code-pen>

### Button Style
<code-pen hash='JmEqQR' :height="200"></code-pen>

### Style Option
##### inline(default) or stacked
<code-pen hash='OBWeyo' :height="500"></code-pen>

##### disabled
<code-pen hash='xygoxE' :height="220"></code-pen>

## API
### Props
##### Radio Group
| Name | Type | Default | Required | Description |
| ------ | ----------- | ------ |:-----:|:-------------|
| v-model | Boolean, Number, String, Object | | no | |
| disabled | Boolean | false | no | |
| stacked | Boolean | false | no | |
| buttonStyle | Boolean | false | no | |
| color | String | 'primary' | no |  |
| size | String | '' | no | default, large(lg), small(sm) |
| options | Array | [] | no | |
| valueField | String | 'value' | no | value of radio |
| labelField | String | 'label' | no | label of radio |

##### Radio
| Name | Type | Default | Required | Description |
| ------ | ----------- | ------ |:-----:|:-------------|
| v-model | Boolean, Number, String, Object | | no | |
| id | String |  | no | |
| checkedValue | Boolean, Number, String, Array, Object | true | no | |
| disabled | Boolean | false | no | |

### Events
| Event Name | Parameters | Description |
| ------ | ----------- | ------ |
| change | - | triggers when radio button clicked |
