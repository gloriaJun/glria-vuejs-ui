# Card

## Examples
### Body
<code-pen hash='XPBeYR'></code-pen>

### Text alignment
<code-pen hash='JaBrmp' :height="700"></code-pen>

### Action
<code-pen hash='eLjGjg'></code-pen>

### Header and footer
<code-pen hash='xaJXMY' :height="350"></code-pen>

### Image
<code-pen hash='bxjoJN' :height="350"></code-pen>


## API
### Props 
#### Card Body
| Name | Type | Default | Required | Description |
| ------ | ----------- | ------ |:-----:|:-------------|
| title   | String | - | no | The title for the card body |
| subTitle   | String | - | no | The subtitle for the card body |

#### Card Media 
| Name | Type | Default | Required | Description |
| ------ | ----------- | ------ |:-----:|:-------------|
| src   | String | - | no | url of image |
| alt   | String | - | no | |


## Slots
| Slot Name | Scope | Description |
| ------ | ----------- | ------ |:-----:|:-------------|
| header   | - | card header |
| (default) | - | card body |
| footer | - | card footer |
