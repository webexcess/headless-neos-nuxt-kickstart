# COMPONENTS

The components directory contains your Vue.js Components.

Headless Neos CMS / GraphQL Folders:

- ~/components/document/ 
- ~/components/content/

Feel free to add partials or other non-CMS related components, like:

- ~/components/partials/


## Create a new custom component


### Define component props

~/components/content/NewComponent.vue

    <script>
        export default {

            # Document..
            props: ['__typename', 'type', 'identifier', 'group', 'options', 'title', 'uriPath', 'meta', 'content']

            # Collection..
            props: ['__typename', 'type', 'identifier', 'group', 'options', 'content']

            # Content..
            props: ['__typename', 'type', 'identifier', 'group', 'options', 'value']
        
        }
    </script>


### Render child content components

Only for NodeType "Collection".

~/components/content/NewComponent.vue

    <template>
        <div>
            <component v-for="contentNode in content" :key="contentNode.identifier" :is="contentNode.type + 'Content'" v-bind="contentNode" />
        </div>
    </template>


### Introduce your new component

~/plugins/components.js

    import NewComponent from '~/components/content/NewComponent.vue'
    Vue.component('NewComponentContent', NewComponent)


### Access specific child content element

~/components/content/NewComponent.vue

    <script>
        export default {
            computed: {
                textElement () {
                    try {
                        return this.$props.content[1]
                    } catch (e) {
                        return null
                    }
                }
            }
        }
    </script>
