tag app
	count = 0
	<self>
		<button@click=count++> "Increment: {count}"
			css bg:blue3 rd:2 p:2 bxs:lg cursor:pointer

if import.meta.env.MODE is 'development'
	imba.mount <app>
