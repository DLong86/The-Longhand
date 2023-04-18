export default function Post({ title, summary, cover, content, createdAt }) {
	return (
		<div className="post">
			<div className="image">
				<img
					src="https://img.redbull.com/images/c_fill,w_1200,h_630,g_auto,f_auto,q_auto/redbullcom/2012/10/17/1331578129949_1/damon-hill-driving-for-williams-back-in-1996"
					alt="Williams FW18 - Hill"
				/>
			</div>
			<div className="texts">
				<h2>{title}</h2>
				<p className="info">
					<a href="/" className="author">
						Dave Long
					</a>
					<time>{createdAt}</time>
				</p>
				<p className="summary">{summary}</p>
			</div>
		</div>
	);
}
