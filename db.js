const db = [
    {
        name: 'Fernanda',
        location: {
            address: 'Rua Vasco Vice',
            city: 'Porto',
            country: 'Portugal'
        },
        parents: [
            {
                firstName: 'Rebeca',
                lastName: 'Jourdan',
                ocupation: 'supervisor'
            },
            {
                firstName: 'Rafael',
                lastName: 'Jourdan',
                ocupation: 'developer'
            }
        ]
    },
    {
        name: 'João',
        location: {
            city: 'Rio de Janeiro',
            country: 'Brazil'
        },
        parents: [
            {
                name: 'Rita',
                ocupation: 'businesswoman'
            }
        ]
    }
]

export default db