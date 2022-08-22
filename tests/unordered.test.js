const { setRoles, setUsers, getSubOrdinates } = require('../src/index');

describe('Test with a more complex / unordered dataset:', () => {
    governments = [
        {
            "Id": 11,
            "Name": "USA",
            "Parent": 0
        },
        {
            "Id": 10,
            "Name": "California",
            "Parent": 11,
        },
        {
            "Id": 9,
            "Name": "illinois",
            "Parent": 11,
        },
        {
            "Id": 8,
            "Name": "Sydney",
            "Parent": 4,
        },
        {
            "Id": 7,
            "Name": "Australia",
            "Parent": 0,
        },
        {
            "Id": 4,
            "Name": "NSW",
            "Parent": 7,
        },
        {
            "Id": 5,
            "Name": "VIC",
            "Parent": 7,
        },
        {
            "Id": 6,
            "Name": "WA",
            "Parent": 7,
        },
        {
            "Id": 12,
            "Name": "Los Angeles",
            "Parent": 10,
        },
        {
            "Id": 13,
            "Name": "Sacramento",
            "Parent": 10,
        }

    ];

    leaders = [
        {
            "Id": 1,
            "Name": "Person1",
            "Role": 12
        },
        {
            "Id": 2,
            "Name": "Person2",
            "Role": 11
        },
        {
            "Id": 3,
            "Name": "Person3",
            "Role": 9
        },
        {
            "Id": 4,
            "Name": "Person4",
            "Role": 8
        },
        {
            "Id": 5,
            "Name": "Person5",
            "Role": 6
        },
        {
            "Id": 6,
            "Name": "Person6",
            "Role": 5
        },
        {
            "Id": 7,
            "Name": "Person7",
            "Role": 4
        },
        {
            "Id": 8,
            "Name": "Person8",
            "Role": 7
        },
        {
            "Id": 9,
            "Name": "Person9",
            "Role": 10
        },
        {
            "Id": 10,
            "Name": "Person10",
            "Role": 13
        },

    ];

    setRoles(governments);
    setUsers(leaders);


    it('Leader Id:1', () => {
        expect(
            getSubOrdinates(1)
        )
            .toStrictEqual(
                [

                ]
            );
    });
    it('Leader Id:2', () => {
        expect(
            getSubOrdinates(2)
        )
            .toStrictEqual(
                [
                    { Id: 1, Name: 'Person1', Role: 12 },
                    { Id: 3, Name: 'Person3', Role: 9 },
                    { Id: 9, Name: 'Person9', Role: 10 },
                    { Id: 10, Name: 'Person10', Role: 13 }
                ]
            );
    });
    it('Leader Id:3', () => {
        expect(
            getSubOrdinates(3)
        )
            .toStrictEqual(
                [
                ]
            );
    });
    it('Leader Id:4', () => {
        expect(
            getSubOrdinates(4)
        )
            .toStrictEqual(
                [
                ]
            );
    });
    it('Leader Id:5', () => {
        expect(
            getSubOrdinates(5)
        )
            .toStrictEqual(
                [
                ]
            );
    });
    it('Leader Id:6', () => {
        expect(
            getSubOrdinates(6)
        )
            .toStrictEqual(
                [
                ]
            );
    });
    it('Leader Id:7', () => {
        expect(
            getSubOrdinates(7)
        )
            .toStrictEqual(
                [
                    { Id: 4, Name: 'Person4', Role: 8 }
                ]
            );
    });
    it('Leader Id:8', () => {
        expect(
            getSubOrdinates(8)
        )
            .toStrictEqual(
                [
                    { Id: 4, Name: 'Person4', Role: 8 },
                    { Id: 5, Name: 'Person5', Role: 6 },
                    { Id: 6, Name: 'Person6', Role: 5 },
                    { Id: 7, Name: 'Person7', Role: 4 }
                ]
            );
    });
    it('Leader Id:9', () => {
        expect(
            getSubOrdinates(9)
        )
            .toStrictEqual(
                [
                    { Id: 1, Name: 'Person1', Role: 12 },
                    { Id: 10, Name: 'Person10', Role: 13 }
                ]
            );
    });
    it('Leader Id:10', () => {
        expect(
            getSubOrdinates(10)
        )
            .toStrictEqual(
                [
                ]
            );
    });

});

