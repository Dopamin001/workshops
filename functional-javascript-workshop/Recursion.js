const { node } = require("prop-types")

rootNode = {
    name: "asdf 1",
    children: [
        {
            name: "asdf 1 2",
            children: [
                {
                    name: "asdf 121",
                    children: [
                        
                    ]
                },
                {
                    name: "asdf 122",
                    children: [
                        
                    ]
                }
            ]
        },
        {
            name: "asdf 121",
            children: [
                
            ]
        },
        {
            name: "asdf 1 4",
            children: [
                
            ]
        }
    ]
}

function findInTree(node){
    console.log("node", node)
    if(node.name === "asdf 121") return [node];
    if(node.children.length === 0) return [];
    const res = node.children.map(findInTree);
    console.log("recusion result", node.name, res)
    console.log("flattend res", node.name, res.flat(1))
    return res.flat(1)
}
findInTree(rootNode)

module.exports = reduce

//fail