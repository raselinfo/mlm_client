import React from "react";
import Tree from "react-d3-tree";
import NavSection from "../Shared/NavSection/NavSection";
import TopSection from "../Shared/TopSection/TopSection";
import Footer from "../Shared/Footer/Footer";
// import Person from "./person.png";

const containerStyles = {
  width: "100%",
  height: "100vh"
};
const renderForeignObjectNode = ({
  nodeDatum,
  toggleNode,
  foreignObjectProps
}) => (
  <g onClick={toggleNode}>
    {/* 
    {/* `foreignObject` requires width & height to be explicitly set. */}
    <foreignObject {...foreignObjectProps}>
      <div
        style={{
          border: "1px solid white",
          backgroundColor: "#fefefe"
        }}
      >
        <img
          src={
            "https://www.pngkey.com/png/full/46-462764_how-to-set-use-person-icon-blue-no.png"
          }
          alt="person"
          style={{
            height: "55px",
            position: "absolute",
            zIndex: 10,
            top: -0,
            left: "58px"
          }}
        />
        <div
          style={{
            textAlign: "center",
            marginTop: 48,
            fontWeight: "bold",
            zIndex: 11,
            height: 30
          }}
        >
          {nodeDatum.name}
        </div>
      </div>
    </foreignObject>
    <circle r={15} cy={40}></circle>
    <text
      x="0"
      y="40"
      text-anchor="middle"
      stroke="#fff"
      stroke-width="1px"
      dy=".3em"
    >
      {nodeDatum.children?.length.toString()}
    </text>
  </g>
);
const nodeSize = { x: 150, y: 150 };
const foreignObjectProps = {
  width: nodeSize.x,
  height: nodeSize.y - 40,
  x: -75,
  y: -55
};

export default class CenteredTree extends React.PureComponent {
  state = {
    debugData: [
      {
        name: "Tree 1",
        children: [
          {
            name: "tree 2"
          },
          {
            name: "tree 2",
            children: [{ name: "Tree 3" }, { name: "Tree 3" }]
          }
        ]
      }
    ]
  };

  async componentDidMount() {
    let email=localStorage.getItem("email")
    let result = await fetch(`http://localhost:5000/unilaveltree/${email}`);
    let data = await result.json();
    console.log(data)
    this.setState({ debugData: data });

    const dimensions = this.treeContainer.getBoundingClientRect();
    this.setState({
      translate: {
        x: dimensions.width / 2,
        y: 70
      },
      data: this.state.debugData,
      depth: 2
    });
  }
  abc() {
    //this.setState({
    //data:} );
    var data = JSON.parse(JSON.stringify(this.state.data));
    data[0].children[0].children[0].children = [{ name: "환타" }];
    this.setState({ data, depth: 2 });
    this.state.debugData = [];
    
  }
  onNodeClick(a, e) {
    console.log(a, e);
  }

  render() {
    return (
      <>
        <div className="p-i">
          <TopSection />
          <NavSection />
          <div className="container">
            <h1 className="p-i-h1">Unilevel Tree</h1>
            <p className="p-i-p">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. A itaque
              et voluptatum non fugiat saepe in. <br />
              Quo architecto dicta temporibus.
            </p>
          </div>
        </div>

        <div style={containerStyles} ref={(tc) => (this.treeContainer = tc)}>
          {this.state.data && (
            <Tree
              data={this.state.data}
              translate={this.state.translate}
              orientation="vertical"
              pathFunc="step"
              shouldCollapseNeighborNodes={true}
              separation={{ siblings: 1, nonSiblings: 1 }}
              nodeSize={nodeSize}
              initialDepth={this.state.depth}
              onNodeClick={this.onNodeClick}
              renderCustomNodeElement={(rd3tProps) =>
                renderForeignObjectNode({ ...rd3tProps, foreignObjectProps })
              }
              zoom={2}
            />
          )}
          <br />
        </div>
        <Footer />
      </>
    );
  }
}
