const infoBoxStyle = 'bg-secondary/70 rounded-xl p-4';

export default function Dashboard() {
	return (
		<>
			<div>
				<div className='flex justify-between flex-wrap'>
					<div className={`${infoBoxStyle}`}>
						<p>Disponivel para Saque</p>
						<p>box</p>
						<p>box</p>
					</div>

					<div className={`${infoBoxStyle}`}>
						<p>Em Analise</p>
						<p>box</p>
						<p>box</p>
					</div>

					<div className={`${infoBoxStyle}`}>
						<p>Reserva Financeira</p>
						<p>box</p>
						<p>box</p>
					</div>
				</div>

				<div>
					<div>
						<p>graph</p>
					</div>
					<div>
						<p>graph</p>
					</div>
				</div>
			</div>
		</>
	);
}
