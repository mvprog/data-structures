'use strict';

(function (root) {
    root.PQ = function (options) {
        var heap = [],
            N = 0,
            compareFn;

        compareFn = options && options.compareFn ? options.compareFn : compareTo;

        var impl = Object.create(null);

        impl.isEmpty = function () {
            return N === 0;
        };

        impl.insert = function (item) {
            insert(item);
        };

        impl.pop = function () {
            var min;
            if (N === 0) {
                return undefined;
            } else {
                min = heap[1];
                exchange(1, N--);
                sinkDown(1);
                heap[N + 1] = null;
                return min;
            }
        }

        impl.peek = function () {
            return N > 0 ? heap[1] : undefined;
        }

        impl.size = function () {
            return N;
        };

        impl.items = function () {
            return heap.slice(1, N + 1);
        };

        impl.merge = function (q) {
            q.items().forEach(function (item) {
                insert(item);
            });
        };

        return impl;

        function insert(item) {
            heap[++N] = item;
            swimUp(N);
        }

        function greater(i, j) {
            return compareFn(heap[i], heap[j]) === 1;
        }

        function compareTo(x, y) {
            return x > y ? 1 : (x < 1 ? -1 : 0);
        }

        function exchange(i, j) {
            var tmp = heap[i];
            heap[i] = heap[j];
            heap[j] = tmp;
        }

        function sinkDown(k) {
            var j;

            while (2 * k <= N) {
                j = 2 * k;
                if (j < N && greater(j, j + 1)) j++;
                if (!greater(k, j)) break;
                exchange(k, j);
                k = j;
            }
        }

        function swimUp(k) {
            while (k > 1 && greater(k / 2 | 0, k)) {
                exchange(k, k / 2 | 0);
                k = k / 2 | 0;
            }
        }
    };
})(this);
