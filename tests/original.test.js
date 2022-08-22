const { getSubOrdinates } = require('../src/index');

describe('Test with original dataset:', () => {
    it('User Id:1', () => {
        expect(
            getSubOrdinates(1)
        )
            .toStrictEqual(
                [
                    { Id: 2, Name: 'Emily Employee', Role: 4 },
                    { Id: 3, Name: 'Sam Supervisor', Role: 3 },
                    { Id: 4, Name: 'Mary Manager', Role: 2 },
                    { Id: 5, Name: 'Steve Trainer', Role: 5 }
                ]
            );
    });
    it('User Id:2', () => {
        expect(
            getSubOrdinates(2)
        )
            .toStrictEqual(
                []
            );
    });
    it('User Id:3', () => {
        expect(
            getSubOrdinates(3)
        )
            .toStrictEqual(
                [
                    { Id: 2, Name: 'Emily Employee', Role: 4 },
                    { Id: 5, Name: 'Steve Trainer', Role: 5 }
                ]
            );
    });
    it('User Id:4', () => {
        expect(
            getSubOrdinates(4)
        )
            .toStrictEqual(
                [
                    { Id: 2, Name: 'Emily Employee', Role: 4 },
                    { Id: 3, Name: 'Sam Supervisor', Role: 3 },
                    { Id: 5, Name: 'Steve Trainer', Role: 5 }
                ]
            );
    });
    it('User Id:5', () => {
        expect(
            getSubOrdinates(5)
        )
            .toStrictEqual(
                []
            );
    });

});