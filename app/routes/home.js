import { html } from '../lib/htm-preact.js'

import { Page } from '../components/layout/page.js'
import prefixUriIfNeeded from '../utils/prefixUriIfNeeded.js'
import { PostsAndCategories } from '../components/layout/postsAndCategories.js'

export const Home = ({ state, dispatch }) => html` <${Page}
    title="Harpy Eagle"
    subtitle="The largest and most powerful eagle in the world"
    description="This is Grayson, the harpy eagle, and you can find him at the World Center for Birds of Prey, Boise, Idaho, United States."
    sidebarImage=${prefixUriIfNeeded('/assets/harpy_eagle.jpg')}
    showLinks=${true}
>
    <${PostsAndCategories} state=${state} dispatch=${dispatch} />
<//>`
