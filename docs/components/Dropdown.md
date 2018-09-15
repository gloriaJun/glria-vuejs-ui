# Dropdown

## Examples
### Basic
<code-pen hash='LJBKoK' :height='170'></code-pen>

### placement
<code-pen hash='yxqdmj'></code-pen>

### context menu


## API
### Props
| Name | Type | Default | Required | Description |
| ------ | ----------- | ------ |:-----:|:-------------|
| hoverable   | Boolean | false | no | toggle button when hover |
| placement   | Boolean | false | no | placement of pop menu<br/>(bottom-left, bottom-right, top, left, right) |

#### Dropdown Item
| Name | Type | Default | Required | Description |
| ------ | ----------- | ------ |:-----:|:-------------|
| href   | String | '#' | no | link |
| disabled   | Boolean | false | no | |
| active   | Boolean | false | no | |


### Events
| Event Name | Parameters | Description |
| ------ | ----------- | ------ |:-----:|:-------------|
| toggle   | - | triggers when dropdown is activated or deactivated |

#### Dropdown Item
| Event Name | Parameters | Description |
| ------ | ----------- | ------ |:-----:|:-------------|
| click   | - | triggers when menu item is clicked |
