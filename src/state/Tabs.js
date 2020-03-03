import React from "react";

/* 1. Make an empty Tabs component to start */
/*class Tabs extends React.Component {
  render() {
    return <div />
  }
}*/


/* 2. Render the buttons  */
/*class Tabs extends React.Component {

    static defaultProps = { tabs: [] };

    render() {
      const buttons = this.props.tabs.map((tab, index) => (
        <button key={index}>
          {tab.name}
        </button>
    ))

    return (
        <div>
          {buttons}
        </div>
    )

}*/


  /* 3. Render the first tab by default */
  /*class Tabs extends React.Component {
    static defaultProps = { tabs: [] };
    render() {
      const buttons = this.props.tabs.map((tab, index) => (
        <button key={index}>
          {tab.name}
        </button>
      ))
    const currentTab = this.props.tabs[0]
    return (
      <div>
        {buttons}
        <div className='content'>
          {currentTab.content}
        </div>
      </div>
    )
    }
  }*/


/* 4. Only show items when there are items inside the props array */
/*class Tabs extends React.Component {
    static defaultProps = { tabs: [] };
    render() {
        const buttons = this.props.tabs.map((tab, index) => (
            <button key={index}>
            {tab.name}
            </button>
        ))
        const currentTab = this.props.tabs[0]
        return (
            <div>
                {buttons}
                {/* only show content when the tabs array has length */
                /*{this.props.tabs.length && (
                    <div className='content'>
                        {currentTab.content}
                    </div>
                )}
            </div>
        )
    }
}*/

/* 5. Move the render logic into separate functions */
/*class Tabs extends React.Component {
    static defaultProps = { tabs: [] };
    renderButtons() {
        return this.props.tabs.map((tab, index) => (
          <button key={index}>
            {tab.name}
          </button>
        ))
      }
    renderContent() {
        const currentTab = this.props.tabs[0]
        return (
          <div className='content'>
            {currentTab.content}
          </div>
        )
      }
    render() {
        return (
          <div>
            {this.renderButtons()}
            {this.props.tabs.length && this.renderContent()}
          </div>
        )
    }
}*/


/* 6. Move the hardcoded 0 into state */
/*class Tabs extends React.Component {
    static defaultProps = { 
        tabs: [] 
    };
    state = {
        currentTabIndex: 0
    };
    renderButtons() {
        return this.props.tabs.map((tab, index) => (
          <button key={index}>
            {tab.name}
          </button>
        ))
    }
    renderContent() {
        const currentTab = this.props.tabs[this.state.currentTabIndex]
        return (
          <div className='content'>
            {currentTab.content}
          </div>
        )
    }

    render() {
        return (
          <div>
            {this.renderButtons()}
            {this.props.tabs.length && this.renderContent()}
          </div>
        )
    }
}*/


/* 7. Add a click event handler on each button to update this index in state */
/*class Tabs extends React.Component {
    static defaultProps = { 
        tabs: [] 
    };
    state = {
        currentTabIndex: 0
    };

    handleButtonClick = () => {
        console.log('button clicked!')
    }

    renderButtons() {
        return this.props.tabs.map((tab, index) => (
          <button key={index} onClick={this.handleButtonClick}>
            {tab.name}
          </button>
        ))
    }

    renderContent() {
        const currentTab = this.props.tabs[this.state.currentTabIndex]
        return (
          <div className='content'>
            {currentTab.content}
          </div>
        )
    }

    render() {
        return (
          <div>
            {this.renderButtons()}
            {this.props.tabs.length && this.renderContent()}
          </div>
        )
    }
}*/


/* 8. Use an arrow function in the JSX to pass the index of the button.*/
/*class Tabs extends React.Component {
    static defaultProps = { 
        tabs: [] 
    };
    state = {
        currentTabIndex: 0
    };

    handleButtonClick(index) {
        console.log('button clicked!', { index })
    }
    renderButtons() {
        return this.props.tabs.map((tab, index) => (
          <button key={index} onClick={() => this.handleButtonClick(index)}>
            {tab.name}
          </button>
        ))
    }

    renderContent() {
        const currentTab = this.props.tabs[this.state.currentTabIndex]
        return (
          <div className='content'>
            {currentTab.content}
          </div>
        )
    }

    render() {
        return (
          <div>
            {this.renderButtons()}
            {this.props.tabs.length && this.renderContent()}
          </div>
        )
    }
}*/

/* 9. Use an arrow function in the JSX to pass the index of the button.
      Update the state with the new index.*/
class Tabs extends React.Component {
    static defaultProps = { 
        tabs: [] 
    };
    state = {
        currentTabIndex: 0
    };

    handleButtonClick(index) {
        this.setState({ currentTabIndex: index })
    }

    renderButtons() {
        return this.props.tabs.map((tab, index) => (
          <button key={index} onClick={() => this.handleButtonClick(index)}>
            {tab.name}
          </button>
        ))
    }

    renderContent() {
        const currentTab = this.props.tabs[this.state.currentTabIndex]
        return (
          <div className='content'>
            {currentTab.content}
          </div>
        )
    }

    render() {
        return (
          <div>
            {this.renderButtons()}
            {!!this.props.tabs.length && this.renderContent()}
          </div>
        )
    }
}

export default Tabs;



/*render() {
    return (
      <div>
        {this.renderButtons()}
        {this.props.tabs.length && this.renderContent()}
      </div>
    )
}*/