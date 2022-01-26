// Before starting, copy and paste your guided practice work from
// `binary-search-tree.js` into this file

// Your code here

// Do not change this
class TreeNode {
    constructor(val) {
      this.val = val;
      this.left = null;
      this.right = null;
    }
  }

  class BinarySearchTree {

    constructor() {
      // Your code here
      this.root = null;
    }

    insert(val, currentNode=this.root) {
      // Your code here
      // no root, root established now
      if(this.root === null){
        this.root = new TreeNode(val);
        //console.log(`Root: ${this.root}`)
        return;
      }
  // tree already has a root
      if(val < currentNode.val){
        if(!currentNode.left){
          currentNode.left = new TreeNode(val);
          //console.log(`Left child of ${currentNode.val}: ${currentNode.left.val}`)
        }else{
          this.insert(val,currentNode.left);
        }

      }else if(val > currentNode.val){
        if(!currentNode.right){
          currentNode.right = new TreeNode(val)
          //console.log(`Right child of ${currentNode.val}: ${currentNode.right.val}`)
        }else{
          this.insert(val,currentNode.right);
        }

      }
    }

    search(val) {
      // Your code here
      let currentNode = this.root;
      while(currentNode !== null){
        if(currentNode.val === val){
          return true;
        }
        if(val < currentNode.val){
          currentNode = currentNode.left;
        }else{
          currentNode = currentNode.right;
        }
      }
      return false;
    }


    preOrderTraversal(currentNode = this.root) {
      // Your code here
      if(!currentNode){
        return;
      }
      console.log(currentNode.val);
      this.preOrderTraversal(currentNode.left);
      this.preOrderTraversal(currentNode.right);
    }


    inOrderTraversal(currentNode = this.root) {
      // Your code here
      if(!currentNode){
        return;
      }
      this.inOrderTraversal(currentNode.left);
      console.log(currentNode.val);
      this.inOrderTraversal(currentNode.right);
    }


    postOrderTraversal(currentNode = this.root) {
      // Your code here
      if(!currentNode){
        return;
      }
      this.postOrderTraversal(currentNode.left);
      this.postOrderTraversal(currentNode.right);
      console.log(currentNode.val);
    }

      // Breadth First Traversal - Iterative
    breadthFirstTraversal() {
      // Your code here
      let queue = [this.root];
      while(queue.length){
        let node = queue.shift();
        console.log(node.val);
        if(node.left){
          queue.push(node.left);
        }
        if(node.right){
          queue.push(node.right);
        }
      }

    }

    // Depth First Traversal - Iterative
    depthFirstTraversal() {
      // Your code here
      let stack = [this.root];
      while(stack.length){
        let node = stack.pop();
        console.log(node.val);
        if(node.left){
          stack.push(node.left);
        }
        if(node.right){
          stack.push(node.right);
        }
      }
    }
  }

  module.exports = { BinarySearchTree, TreeNode };
