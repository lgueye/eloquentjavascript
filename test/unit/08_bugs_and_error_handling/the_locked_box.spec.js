describe("the locked box test suite", function() {
    var box;

    beforeEach(function() {
        box = {
            locked: true,
            unlock: function() {
                this.locked = false;
            },
            lock: function() {
                this.locked = true;
            },
            _content: [],
            get content() {
                if (this.locked) throw new Error("Locked!");
                return this._content;
            }
        };
    });

    it("withBoxUnlocked should add item then lock the box", function() {
        // Given
        var item = "gold piece";

        // When
        withBoxUnlocked(box, function() {
            box.content.push(item);
        });

        // Then
        expect(box.locked).toEqual(true);
        box.unlock();
        expect(box.content.length).toEqual(1);
        expect(box.content[0]).toEqual(item);

    });
    it("withBoxUnlocked should not add any item but still keep box locked", function() {
        // When
        try {
            withBoxUnlocked(box, function() {
                throw new Error("Pirates on the horizon! Abort!");
            });
        } catch (e) {
            console.log("Error raised:", e);
        }

        // Then
        expect(box.locked).toEqual(true);
    });
});
