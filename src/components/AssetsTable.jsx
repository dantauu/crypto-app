import { useCrypto } from '../context/crypto-context'
import { Table } from 'antd'

const columns = [
	{
		title: 'Price $',
		dataIndex: 'price',
		sorter: (a, b) => a.name.length - b.name.length,
		sortDirections: ['descend'],
	},
	{
		title: 'Name',
		dataIndex: 'name',
		defaultSortOrder: 'descend',
		sorter: (a, b) => a.price - b.price,
	},
	{
		title: 'Amount',
		dataIndex: 'amount',
		defaultSortOrder: 'descend',
		sorter: (a, b) => a.amount - b.amount,
	},
]

export default function AssetsTable() {
    const { assets } = useCrypto()

    const data = assets.map((a) => ({
        key: a.id,
        name: a.name,
        price: a.price,
        amount: a.amount,
    }))

    return (
        <Table pagination={false} 
        columns={columns} 
        dataSource={data} />
    )
}