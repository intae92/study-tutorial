/**
 * Heap 힙?
 * 힙 자료구조는 완전이진트리를 기초로 하는 자료구조
 * 완전 이진트리는 마지막을 제외한 모든 노드에서 자식들이 꽉 채워진 이진트리를 말한다.
 *
 * 힙은 최대힙(Max Heap), 최소힙(Min Heap)으로 나눠진다.
 * 최대힙은 부모노드의 값이 자식노드들의 값보다 항상 크다
 * 최소힙은 부모노드의 값이 자식노드의 값보다 항상 작다
 * 힙은 중복값을 허용한다(힙은 최댓값, 최솟값을 쉽게 뽑기 위한 자료구조이므로 중복을 허용함)
 *
 * 힙은 완전이진트리를 기본으로 하기 때문에 비어있는 공간이 없어 배열로 구현하기 용이하다.
 *
 */

class Heap {
  constructor() {
    this.heap = [];
  }

  insert(value) {
    this.heap.push(val);
    let cur = this.heap.length - 1;
    let parent = Math.floor((cur - 1) / 2);

    while (parent < val) {
      this.swap(this.heap[parent], this.heap(cur));
      cur = parent;
      parent = Math.floor((cur - 1) / 2);
    }
  }
  pop() {
    const lastIndex = this.heap.length - 1;
    this.swap(this.heap[0], this.heap[lastIndex]);

    let value = this.heap.pop();
    let cur = 0;
    while (cur < lastIndex) {
      let leftChild = cur * 2 + 1;
      let rightChild = cur * 2 + 2;

      if (leftChild >= lastIndex) {
        break;
      } else if (rightChild >= lastIndex) {
        if (this.heap[cur] < this.heap[leftChild]) {
          this.swap(this.heap[cur], this.heap[rightChild]);
          cur = leftChild;
        } else {
          break;
        }
      } else {
        if (
          this.heap[cur] < this.heap[leftChild] &&
          this.heap[cur] < this.heap[rightChild]
        ) {
          if (this.heap[leftChild] > this.heap[rightChild]) {
            this.swap(this.heap[cur], this.heap[leftChild]);
            cur = leftChild;
          } else {
            this.swap(this.heap[cur], this.heap[rightChild]);
            cur = rightChild;
          }
        }
        // 어느 한 쪽 자식의 값만 자신의 값보다 더 크다면 그 값과 swap한다.
        else if (this.heap[cur] < this.heap[leftChild]) {
          this.swap(this.heap[cur], this.heap[leftChild]);
          cur = leftChild;
        } else if (this.heap[cur] < this.heap[rightChild]) {
          this.swap(this.heap[cur], this.heap[rightChild]);
          cur = rightChild;
        } else {
          break;
        }
      }
    }
  }

  swap(a, b) {
    [this.heap[a], this.heap[b]] = [this.heap[b], this.heap[a]];
  }

  size() {
    return this.heap.length;
  }
}
