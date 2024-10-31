import { Divider, Flex, Tag, Typography } from 'antd'
import CoinInfo from '../CoinInfo'

export default function CoinModalInfo({coin}) {
    return (
			<>
				<CoinInfo coin={coin} withSymbol />
				<Divider />
				<Typography.Paragraph>
					<Typography.Text strong> 1 hour: </Typography.Text>
					<Tag color={coin.priceChange1h > 0 ? 'green' : 'red'}>
						{coin.priceChange1h}%
					</Tag>
					<Typography.Text strong> 1 day: </Typography.Text>
					<Tag color={coin.priceChange1d > 0 ? 'green' : 'red'}>
						{coin.priceChange1d}%
					</Tag>
					<Typography.Text strong> 1 week: </Typography.Text>
					<Tag color={coin.priceChange1w > 0 ? 'green' : 'red'}>
						{coin.priceChange1w}%
					</Tag>
				</Typography.Paragraph>

				<Typography.Paragraph>
					<Typography.Text style={{ marginRight: '10px' }} strong>
						Price:
					</Typography.Text>
					{coin.price.toFixed(2)}$
				</Typography.Paragraph>

				<Typography.Paragraph>
					<Typography.Text style={{ marginRight: '10px' }} strong>
						Price Btc:
					</Typography.Text>
					{coin.priceBtc}
				</Typography.Paragraph>

				<Typography.Paragraph>
					<Typography.Text style={{ marginRight: '10px' }} strong>
						Market Cap:
					</Typography.Text>
					{coin.marketCap}$
				</Typography.Paragraph>

				<Typography.Paragraph>
					<Typography.Text style={{ marginRight: '10px' }} strong>
						Contract Address:
					</Typography.Text>
					{coin.contractAddress}
				</Typography.Paragraph>
			</>
		)
}