# Checkbox

## Examples
### Basic
<code-pen hash='ReKQPG' :height="250"></code-pen>

### Checkbox Group 
<code-pen hash='YJNeqW' :height="300"></code-pen>

### Button Style
<code-pen hash='QZdmRN' :height="200"></code-pen>

### Style Option
##### inline(default) or stacked
<code-pen hash='qJRYBM' :height="420"></code-pen>

##### disabled
<code-pen hash='pxRaZB' :height="200"></code-pen>

### Indeterminate
<code-pen hash='mzRLVN' :height="200"></code-pen>

## API
### Props
##### Checkbox Group
| Name | Type | Default | Required | Description |
| ------ | ----------- | ------ |:-----:|:-------------|
| v-model | Boolean, Number, String, Object | [] | no | |
| disabled | Boolean | false | no | |
| stacked | Boolean | false | no | |
| buttonStyle | Boolean | false | no | |
| color | String | 'primary' | no |  |
| size | String | '' | no | default, large(lg), small(sm) |
| options | Array | [] | no | |
| valueField | String | 'value' | no | value of radio |
| labelField | String | 'label' | no | label of radio |

##### Checkbox
| Name | Type | Default | Required | Description |
| ------ | ----------- | ------ |:-----:|:-------------|
| v-model | Boolean, Number, String, Object | | no | |
| id | String |  | no | |
| checkedValue | Boolean, Number, String, Array, Object | true | no | |
| uncheckedValue | Boolean, Number, String, Array, Object | false | no | |
| indeterminate | Boolean | false | no | same as indeterminate in native checkbox |
| disabled | Boolean | false | no | |

### Events
| Event Name | Parameters | Description |
| ------ | ----------- | ------ |
| change | - | triggers when checkbox button clicked |
