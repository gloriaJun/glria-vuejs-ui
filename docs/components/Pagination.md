# Pagination

## Examples
### Basic
<code-pen hash='rZZBKW'></code-pen>


### PageSize
*add pageSize change example*
<code-pen hash='vzzBzz' :height="150"></code-pen>

### Style 
<code-pen hash='eLLOPB' :height="600"></code-pen>

## API
### Props
| Name | Type | Default | Required | Description |
| ------ | ----------- | ------ |:-----:|:-------------|
| vertical   | Boolean | false | no | |

#### Nav Item
| Name | Type | Default | Required | Description |
| ------ | ----------- | ------ |:-----:|:-------------|
| value   | Number | 1 | no | current page number |
| total   | Number | - | no | total item count |
| perPage   | Number | 10 | no | item count of each page |
| border   | Boolean | false | no | |
| size   | String | '' | no | default, large(lg), small(sm) |
| align   | String | '' | no | left(default), center, right |

### Events
#### Nav Item
| Event Name | Parameters | Description |
| ------ | ----------- | ------ |:-----:|:-------------|
| page-change | current | triggers when current-page changes |
| prev-click | current | triggers when the prev button |
| next-click | current | triggers when the next button |
