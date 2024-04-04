/* Create a Container component that renders its children within a div tag.
Have the div tag use a white background and a red border.
Add a title prop that will contain the title value to be displayed before the children.
Make the container collapsible, so that when the title is clicked the children are either hidden of shown again.
Use the useState hook to keep track of the collapsed state. */

import { useState } from "react";

function Container({ title, children }) {
  const [collapsed, setCollapsed] = useState(false)

  function handleToggleCollapse () {
    setCollapsed(t => !t)
  }

  return ( 
  <div className="app"
    style={{
        backgroundColor: 'white',
        border: '1px solid red',
        width: '60%',
        height: '60%'
    }}
  >
   <div className="app-title">{title} <button onClick={handleToggleCollapse}>Toggle</button></div>
   {collapsed && <div className="app-content">{children}</div>}
  </div>
  )

}

export default Container;
