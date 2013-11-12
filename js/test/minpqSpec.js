describe('Minimum Priority Queue Implementation Test Suite', function () {
    it('size() should never be less than zero', function () {
        var q = new PQ();
        expect(q.size()).toBe(0);
        q.insert(8);
        expect(q.size()).toBe(1);
        q.pop();
        expect(q.size()).toBe(0);
        q.insert(8);
        expect(q.size()).toBe(1);
        q.pop(); q.pop();
        expect(q.size()).toBe(0);
    });

    it('pop() should always return the minimum item in the queue', function () {
        var q = new PQ();
        q.insert(8);
        expect(q.pop()).toBe(8);
        q.insert(7);
        q.insert(8);
        expect(q.pop()).toBe(7);
        q.insert(3);
        expect(q.pop()).toBe(3);
        expect(q.pop()).toBe(8);
    });

});
