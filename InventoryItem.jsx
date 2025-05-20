function InventoryItem ({name, type, quantity = 0, price = 0.00})
{
	return (
		<div>
			<h2><span id="name">{name}</span> <span id="type">({type})</span></h2>

                {/* <!-- low stock alert. --> */}
                {quantity < 5 && (
                    <Message><span className="icon">🚨</span> Low Stock! Only {quantity} remaining.</Message>
                )}

                {/* <!-- high value alert. --> */}
                {quantity * price > 1000.00 && (
                    <Message><span className="icon">💎</span> High Value. Consider extra protection!</Message>
                )}
		</div>
	);
}
