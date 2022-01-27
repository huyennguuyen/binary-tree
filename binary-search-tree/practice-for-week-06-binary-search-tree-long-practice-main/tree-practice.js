const { BinarySearchTree, TreeNode } = require('./binary-search-tree.js');
// Before starting, copy and paste your guided practice work into the copy
// of `binary-search-tree.js` in this folder

// Practice problems on binary trees

function findMinBST (rootNode) {
  // Your code here
  let currNode = rootNode;
  while(currNode && currNode.left){
   currNode = currNode.left
  }

  return currNode.val
}

function findMaxBST (rootNode) {
  // Your code here
  let currNode = rootNode;
  while(currNode && currNode.right){
   currNode = currNode.right
  }

  return currNode.val
}

function findMinBT (rootNode) {
  // Your code here
  let min = rootNode.val


    if (rootNode.left){
      min = Math.min(min, findMinBT(rootNode.left))
    }

    if(rootNode.right){
      min = Math.min(min, findMinBT(rootNode.right))
    }

    return min


}

function findMaxBT (rootNode) {
  // Your code here
  let max = rootNode.val


    if (rootNode.left){
      max = Math.max(max, findMaxBT(rootNode.left))
    }

    if(rootNode.right){
      max = Math.max(max, findMaxBT(rootNode.right))
    }

    return max
}

function getHeight (rootNode) {
  // Your code here
  // let count = 0;
  // let max =

  if (!rootNode || (!rootNode.left && !rootNode.right)){
    return 0
  }

    let left = getHeight(rootNode.left)
  let right = getHeight(rootNode.right)

  return Math.max(left + 1, right + 1)

}

function countNodes (rootNode) {
  // Your code here
  let count = 1
  let queue = [rootNode];


  while(queue.length){
    let node = queue.shift();

    if(node.left){
      queue.push(node.left);
      count++
    }
    if(node.right){
      queue.push(node.right);
      count++
    }
  }

  return count



}

function balancedTree (rootNode) {
  // Your code here
  let left = getHeight(rootNode.left)
  let right = getHeight(rootNode.right)




  if(Math.abs(left - right) > 1) {
    return false
  } else {
    return true
  }






}

function getParentNode (rootNode, target) {
  // Your code here

  if (!target) {
    return undefined
  }

  if(rootNode === target) {
    return null
  }

  let queue = [rootNode];


  while(queue.length){
    let node = queue.shift();

    if(node.left){
      queue.push(node.left);
      
    }
    if(node.right){
      queue.push(node.right);
      count++
    }
  }



}

function inOrderPredecessor (rootNode, target) {
  // Your code here
}


function deleteNodeBST(rootNode, target) {
  // Do a traversal to find the node. Keep track of the parent

  // Undefined if the target cannot be found

  // Set target based on parent

  // Case 0: Zero children and no parent:
  //   return null

  // Case 1: Zero children:
  //   set the parent that points to it to null

  // Case 2: Two children:
  //   set the value to its in-order predecessor, then delete the predecessor

  // Case 3: One child:
  //   Make the parent point to the child

}

// btRoot = new TreeNode(1);
//     btRoot.left = new TreeNode(2);
//     btRoot.left.left = new TreeNode(4);
//     btRoot.left.right = new TreeNode(5);
//     btRoot.right = new TreeNode(3);
//     btRoot.right.left = new TreeNode(6);
//     btRoot.right.right = new TreeNode(7);

// console.log(findMinBT(btRoot))

module.exports = {
    findMinBST,
    findMaxBST,
    findMinBT,
    findMaxBT,
    getHeight,
    countNodes,
    balancedTree,
    getParentNode,
    inOrderPredecessor,
    deleteNodeBST
}
