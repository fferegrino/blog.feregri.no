const booksData = [
	{
		name: "Estadística",
		books: [
			{
				title: "Discovering Statistics Using R",
				description:
					'Comenzando por los de estadística, tenemos "Discovering Statistics Using R", librazo para quienes vayan comenzando con estadística, particularmente si tienen interés en el uso de R, pero si no, aún vale la pena. Es un libro grande y pesado, y denso en contenido con muchas matemáticas dentro',
				rating: 5,
				author: "Andy Field",
				isbn: "1446200469",
			},
			{
				title: "Statistics without Tears",
				description:
					'Si buscas una introducción mucho, pero mucho más ligera, está "**Statistics without Tears**", el subtítulo del libro lo dice todo: una introducción para no-matemáticos. Es un libro pequeño y ligero pero de lo más recomendable 🟢',
				rating: 5,
				author: "Derek Rowntree",
				isbn: "0141987499",
			},
			{
				title: "The Art of Statistics: Learning from Data",
				description:
					'Después tenemos "****Statistics: The Art and Science of Learning from Data****”, otro libro con un poco más de "rigor" pero que no deja de ser leíble por quienes van comenzando. Tiene ejemplos en la vida real y profundiza en los temas, no esperes muchas matemáticas🟢',
				rating: 5,
				author: "David Spiegelhalter",
				isbn: "0241258766",
			},
			{
				title: "The Cartoon Guide to Statistics",
				description:
					'¿Sientes que quieres reforzar tus conocimientos pero de forma más informal, “**The Cartoon Guide to Statistics**” es tu libro. No dejes que su portada te engañe, no creo que sea un libro introductorio, más bien uno que puedes agarrar después de conocer un poquito las bases 🟠',
				rating: 3,
				author: "Larry Gonick",
				isbn: "0062731025",
			},
			{
				title: "Think Stats",
				description:
					'Pasando a los libros que tienen código, tenemos “**Think Stats**”… este no me gustó tanto, no es un libro introductorio a Python y a estadísticas, es bueno si ya sabes un poco de Python y un poco de estadística, y te muestra cómo representar este conocimiento programado 🟠',
				rating: 3,
				author: "Allen B. Downey",
				isbn: "9781491907368",
			},
			{
				title: "Practical Statistics for Data Scientists",
				description:
					'Después tenemos "**Practical Statistics for Data Scientists**”, uno de esos libros estilo recetario, de nuevo, no es uno que te vaya a enseñar a profundidad los conocimientos de estadística, su gran ventaja es que cubre dos lenguajes, así que te puede servir como transición de uno a otro 🟢',
				rating: 5,
				author: "Peter Bruce, Andrew Bruce, Peter Gedeck",
				isbn: "9781492072942",
			},
			{
				title: "Think Bayes",
				description:
					'Por último, "**Think Bayes**”, igual que el otro libro del mismo autor (Think Stats), no tan introductorio. Solo que en este parece ser que el código está complicado innecesariamente, así que a veces no sabes si estás tratando de entender Bayes o entendiendo programación orientada a objetos en Python 🔴',
				rating: 1,
				author: "Allen B. Downey",
				isbn: "9781492089469",
			},
			{
				title: "A Programmer's Introduction to Mathematics",
				description:
					'"****A Programmer\'s Introduction to Mathematics****", tenía grandes esperanzas sobre este libro, pero he de decirlo que es un poco difícil de seguir – definitivamente vale la pena si quieres entender conceptos matemáticos desde otra perspectiva, pero no si es uno de tus primeros libros para adentrarte al tema 🟠',
				rating: 1,
				author: "Jeremy Kun",
				isbn: "979-8625373425",
			},
		],
	},
	{
		name: "Ciencia de Datos / Machine Learning",
		books: [
			{
				title: "Data Science from Scratch",
				description:
					'Van libros de ciencia de datos/ML. El primero, "**Data Science from Scratch**", enseña superficialmente los principios de la ciencia de datos, pero contiene mucho código sobre cómo es que funcionan. Bueno para comenzar, pero de ninguna manera la única fuente de conocimiento 🟠',
				rating: 4,
				author: "Joel Grus",
				isbn: "9781492041085",
			},
			{
				title: "Python for Data Analysis",
				description:
					'"**Python for Data Analysis**”, es otro de esos libros tipo recetario, no es bueno para comenzar pero bueno para comenzar a manejar pandas para el análisis de datos, habla de varias bibliotecas básicas de la ciencia de datos con Python, creo que es buena inversión considerando todo 🟢',
				rating: 5,
				author: "Wes McKinney",
				isbn: "9781098104030",
			},
			{
				title: "Approaching (Almost) Any Machine Learning Problem",
				description:
					'El siguiente, "**Approaching (Almost) Any Machine Learning Problem**”, la verdad es que estoy medio decepcionado por el libro porque tenía grandes expectativas del autor, pero parece más bien una colección de apuntes del autor con poca explicación de lo que va sucediendo – definitivamente no lo volvería a comprar 🔴',
				rating: 1,
				author: "Abhishek Thakur",
				isbn: "9390274435",
			},
			{
				title: "The Hundred-Page Machine Learning Book",
				description:
					'Corto y conciso "**The Hundred-Page Machine Learning Book**”, no son exactamente 100 páginas, pero el contenido hace olvidar esa pequeña mentira. Es un libro de referencia, como un diccionario sobre machine learning para conocer y consultar los conceptos básicos de ML (contiene diagramas y fórmulas para mayor claridad) 🟢',
				rating: 4,
				author: "Andriy Burkov",
				isbn: "199957950X",
			},
			{
				title: "Applied Text Analysis with Python",
				description:
					'Pasamos al texto, "**Applied Text Analysis with Python**” no es el mejor libro para entender PLN (casi no cubre teoría), pero sí para comenzar a usarlo rápido en tus aplicaciones. Creo que es mejor para programadores con experiencia en Python, a mi me gustó 🟠',
				rating: 4,
				author: "Benjamin Bengfort, Rebecca Bilbro, Tony Ojeda",
				isbn: "1491963042",
			},
			{
				title: "Hands-On Machine Learning with Scikit-Learn, Keras, and TensorFlow",
				description:
					'La joya de la corona, "**Hands-on Machine Learning with Scikit-Learn, Keras, and TensorFlow**”, creo que es el mejor libro de introducción a machine learning que existe. Muchos detalles, teoría y código, usando bibliotecas estándar. Si solamente puedes conseguir un libro, este es 🟢',
				rating: 5,
				author: "Aurelien Geron",
				isbn: "9781098125974",
			},
			{
				title: "Hands-On Unsupervised Learning Using Python",
				description:
					'A pesar de su nombre, "**Hands-On Unsupervised Learning Using Python**” no tiene la misma calidad que el otro “Hands-On…”, creo que hay mejores formas de aprender las técnicas de aprendizaje no-supervisadas, aún así, sy ya conoces las técnicas y quieres conocer otra perspectiva… 🟠',
				rating: 3,
				author: "Ankur A. Patel",
				isbn: "9781492035596",
			},
			{
				title: "Build a Career in Data Science",
				description:
					'Mención honorífica: "**Build a Career in Data Science**”, absolutamente recomendado para quienes quieren tener, o ya tienen, una carrera en a ciencia de datos. No cubre nada técnico (no esperes ecuaciones), más bien te da consejos sobre cómo hacer crecer tu carrera como data scientist 🟢',
				rating: 5,
				author: "Emily Robinson and Jacqueline Nolis",
				isbn: "9781617296246",
			},
		]
	},
	{
		name: "Deep learning práctico",
		books: [
			{
				title: "Deep learning with Python",
				description:
					'Regresando al machine learning, "Deep Learning with Python” es otro de esos libros que recomiendo sin pensarlo. Contiene un buen balance entre teoría y código, aunque las explicaciones no son tan formales como las de un libro de matemáticas. Recomendadísimo',
				rating: 5,
				author: "François Chollet",
				isbn: "9781617294433",
			},
		],
	},
	{
		name: "MLOps",
		books: [
			{
				title: "Introducing MLOps",
				description:
					"un libro completamente teórico pero que no tiene desperdicio, no tiene nada de código, pero cubre muchos aspectos importantes que forman parte de la nueva disciplina. MLOps es una disciplina sociotécnica",
				rating: 5,
				author: "Mark Treveil",
				isbn: "1492083291",
			},
			{
				title: "Building Machine Learning Powered Applications",
				description:
					'El libro "Building Machine Learning Powered Applications” me hizo cambiar mi mentalidad respecto a lo que me quería dedicar, me llevó a querer adentrarme al MLOps. Explica muchos de los aspectos de llevar aplicaciones a producción.',
				rating: 5,
				author: "Emmanuel Ameisen",
				isbn: "149204511X",
			},
			{
				title: "Machine Learning Engineering",
				description:
					'El libro "Machine Learning Engineering" es una especie de complemento al libro de 100 páginas de ML, este cubre aspectos de puesta en producción de modelos. Al ser un libro pequeño, su contenido es muy directo al grano, es un libro de referencia así que tampoco esperes aprender mucho desde 0',
				rating: 4.5,
				author: "Andriy Burkov",
				isbn: "1999579577",
			},
			{
				title: "Machine Learning Design Patterns",
				description:
					'Otro buen libro de referencia es "Machine Learning Design Patterns”, contiene un montón de problemas comunes y soluciones a ellos. Es uno de esos libros que tengo a la mano para consultarlo de vez en cuando. Recomendable leerlo aunque no vayas a poner cosas en producción',
				rating: 5,
				author: "Valliappa Lakshmanan and Michael Munn",
				isbn: "1098115783",
			},
			{
				title: "Building Machine Learning Pipelines",
				description:
					'No es que no me haya gustado mucho este libro, pero sucede que "Building Machine Learning Pipelines” usa TensorFlow Extended, una biblioteca demasiado invasiva (si no estás usando TensorFlow) para integrar en tus aplicaciones de producción. La teoría está bien a secas',
				rating: 5,
				author: "Hannes Hapke and Catherine Nelson",
				isbn: "9781492053194",
			},
			{
				title: "Engineering MLOps",
				description:
					'El libro "Engineering MLOps" cubre un montón de terreno y no lo consideraría de introducción a MLOps, más bien es para usarlo si ya conoces del área. Una cosa a considerar es que es un libro totalmente centrado en Azure, algo que no queda claro a primera vista',
				rating: 3,
				author: "Emmanuel Raj",
				isbn: "1800562888",
			},
			{
				title: "Agile Data Science 2.0",
				description:
					'Cuando leí "Agile Data Science 2.0” pensé que era un buen libro, pero ahora ya no tanto. Creo que lo que más vale la pena es los primeros dos capítulos en donde habla de las dificultades de hacer ciencia de datos en entornos ágiles, el resto del libro es un tanto blando',
				rating: 3,
				author: "Russell Jurney",
				isbn: "9781491960110",
			},
			{
				title: "Data Science on AWS",
				description:
					'Si trabajas con AWS, "Data Science on AWS” es un libro que deberías tener, es totalmente práctico y te enseña todas las capacidades que tiene AWS para soporte de ciencia de datos. Eso si, debes tener conocimiento sólido de otras áreas de la plataforma',
				rating: 3,
				author: "Chris Fregly and Antje Barth",
				isbn: "9781492079385",
			},
			{
				title: "Reliable Machine Learning",
				description: "TBA",
				rating: 5,
				author:
					"Cathy Chen, Niall Richard Murphy, Kranti Parisa, D. Sculley, Todd Underwood",
				isbn: "9781098106225",
			},
			{
				title: "Machine Learning Engineering in Action",
				description:
					'Denso en información, más teórico que práctico tenemos "Machine Learning Engineering in Action”, es un libro pesado pero relleno de buenas prácticas y consejos. Me va gustando mucho ',
				rating: 5,
				author: "Ben Wilson",
				isbn: "9781617298714",
			},
			{
				title: "Machine Learning Systems",
				description:
					'Luego tengo este de "Machine Learning Systems”, lo comencé pero como que no me gustó tanto porque es un libro práctico enfocado en Scala, además de que es muy corto y no profundiza en nada concreto. Si lo tuyo es Scala, échale un ojo',
				rating: 3,
				author: "Jeff Smith",
				isbn: "9781617293337",
			},
			{
				title: "Machine Learning Engineering with Python",
				description:
					'"Machine Learning Engineering with Python”, sentimientos encontrados con este, por una parte creo que se enfoca en muchos temas que escapan el tema de ML, pero por otro el contenido es bueno. Diría que te lo leas si vienes de ingenieria de software a MLOps',
				rating: 3,
				author: "Andrew P. McMahon",
				isbn: "9781801079259",
			},
			{
				title: "Practical MLOps",
				description:
					'A este si no le veo ni pies ni cabeza, "Practical MLOps”, son un montón de ideas disconexas, como que los autores tienen una gran ambición pero no se ponen de acuerdo para que toda la información fluya amigablemente. En mi opinión, habla poco de MLOps',
				rating: 1,
				author: "Noah Gift and Alfredo Deza",
				isbn: "9781098103019",
			},
			{
				title: "MLOps Engineering at Scale",
				description: "TBA",
				// rating: 1,
				author: "Carl Osipov",
				isbn: "9781617297762",
			},
			{
				title: "Effective Data Science Infrastructure",
				description: "TBA",
				// rating: 1,
				author: "Ville Tuulos",
				isbn: "9781617299193",
			},
			{
				title: "Designing Machine Learning Systems",
				description: "TBA",
				// rating: 1,
				author: "Chip Huyen",
				isbn: "9781098107963",
			},
			{
				title: "Designing Data-Intensive Applications",
				description: "TBA",
				// rating: 1,
				author: "Martin Kleppmann",
				isbn: "1449373321",
			},
		],
	},
	{
		name: "Machine Learning teórico",
		books: [
			{
				title: "A First Course in Machine Learning",
				description: 'No nos olvidamos de la teoría de ML, "**A First Course in Machine Learning**”, como el nombre lo indica, es "un primer curso", va a detalle en algunos cuantos temas selectos de machine learning. Se acerca a los temas desde un punto puramente matemático pero explicando todo paso por paso: Álgebra lineal y cálculo 🟢',
				rating: 4,
				author: "Simon Rogers and Mark Girolami",
				isbn: "9781498738484",
			},
			{
				title: "Mathematics for Machine Learning",
				description: '"**Mathematics for Machine Learning**”, como su nombre lo indica, este libro habla de las matemáticas que se requieren para entender el funcionamiento de los algoritmos de machine learning, también contiene un poco de introducción a temas de ML, pero eso noes lo más valioso. Recomendado 🟢',
				rating: 5,
				author: "Marc Peter Deisenroth",
				isbn: "110845514X",
			},
			{
				title: "Pattern Recognition and Machine Learning",
				description: 'Como un ladrillo de conocimiento llega “**Pattern Recognition and Machine Learning**”, bastante avanzado para mi, pero sin duda uno de los mejores libros para entender machine learning desde un punto de vista teórico 🟢',
				rating: 5,
				author: "Christopher M. Bishop",
				isbn: "0387310738",
			},
			{
				title: "The Elements of Statistical Learning",
				description: 'Otro libro de esos que parecen de los básicos en la teoría de ML, "**The Elements of Statistical Learning**”. Incluye de todo, hasta contenido sobre redes neuronales, con explicaciones brillantes entre gráficas y fórmulas a todo color. Caro, eso si 🟢',
				rating: 5,
				author: "Robert Tibshirani and Trevor Hastie",
				isbn: "0387848576",
			},
			{
				title: "Machine Learning: A Probabilistic Perspective",
				description: '"**Machine Learning: A Probabilistic Perspective**”, definitivamente no es para principiantes (creo yo), de nuevo, nada de código y puras fórmulas, un buen libro de referencia matemática – tiene a su favor que es uno de los más recientes, aunque no es que la teoría haya cambiado demasiado 🟢 ',
				rating: 5,
				author: "Kevin P. Murphy",
				isbn: "0262018020",
			},
			{
				title: "Deep Learning",
				description: '"Para el público este es uno de los mejores libros sobre las redes neuronales profundas, "**Deep Learning**”, es un libro dirigido más para la gente interesada en la investigación que a la práctica. Definitivamente no es uno que leería sin conocimientos sólidos de cálculo y álgebra lineal 🟢',
				rating: 5,
				author: "Ian Goodfellow, Yoshua Bengio, Aaron Courville, Francis Bach",
				isbn: "0262035618",
			},
		]
	},
	{
		name: "Visualización de datos",
		books: [
			{
				title: "Storytelling with Data",
				description: 'Hablando de temas menos matemáticos, "**Storytelling with Data**” es un excelente libro sobre tips y técnicas para lograr visualización de datos efectiva. Habiendo dicho eso, es un libro básico, como para comenzar en la tema, no vas a aprender nada extraordinario 🟢',
				rating: 5,
				author: "Cole Nussbaumer Knaflic",
				isbn: "1119002257",
			},
			{
				title: "How Charts Lie",
				description: 'Un libro lleno de ejemplos de lo que sí y no se debe hacer, "How Charts Lie”, es una buena lectura para reforzar algunas de las ideas que ya tengas sobre dataviz, o para deshacerte de las no tan buenas prácticas. Es un libro que inclusive le recomendaría a gente no técnica 🟢',
				rating: 5,
				author: "Alberto Cairo",
				isbn: "0393358429",
			},
			{
				title: "Making Data Visual",
				description: 'Un librito pequeño, "**Making Data Visual**”, no es un buen recurso para aprender de visualización de datos en mi opinión, sino que cubre temas que rodean a la disciplina, si te quieres dedicar enteramente a la visualización de datos, creo que es un libro a considerar 🟠',
				rating: 3,
				author: "Danyel Fisher, Miriah Meyer",
				isbn: "9781491928424",
			},
		]
	},
	{
		name: 'Deep Learning práctico',
		books: [
			{
				title: "Grokking Deep Learning",
				description: 'El libro "**Grokking Deep Learning**” es otro de introducción al aprendizaje profundo, te lo recomiendo si quieres aprender del tema sin el uso de frameworks, comenzando desde 0 con fines educativos. La única queja que tengo ques que puede tener mejores ejemplos, aún así, recomendado 🟢',
				rating: 5,
				author: "Andrew W Trask",
				isbn: "1617293709",
			},
			{
				title: "Deep Learning for Coders with Fastai and PyTorch",
				description: 'Hecho para la gente ya tiene un conocimiento sólido de programación, "**Deep Learning for Coders with Fastai and PyTorch**”, es un libro bastante bueno, enfocado principalmente en la práctica de las redes neuronales usando el framework Fastai para acelerar las cosas 🟢',
				rating: 4,
				author: "Jeremy Howard, Sylvain Gugger",
				isbn: "9781492045526",
			},
			{
				title: "Programming PyTorch for Deep Learning",
				description: 'No puedo recomendar "**Programming PyTorch for Deep Learning**” para todos, siento que es un libro medio superficial en ciertos aspectos, es probable que el conocimiento lo encuentres fácilmente en otros lados. Pero si aprender de libros es definitivamente lo tuyo, adelante 🟠',
				rating: 3,
				author: "Ian Pointer",
				isbn: "1492045357",
			},
			{
				title: "Natural Language Processing with PyTorch",
				description: '"**Natural Language Processing with PyTorch**”, mi queja principal con este libro es que es extremadamente corto, y pareciera que fue hecho medio a prisa. Te recomendaría que obtuvieras conocimientos de NLP antes y uses este libro para aplicarlas en PyTorch 🟠'				,
				rating: 3,
				author: "Delip Rao",
				isbn: "1491978236",
			},
			{
				title: "Generative Deep Learning",
				description: 'Este libro me gustó bastante, "**Generative Deep Learning**”, explica las bases del funcionamiento de muchas de esas cosas que últimamente están en las noticias. Y tiene ejemplos que te permiten crear cosas básicas pero impresionantes y entretenidas 🟢'				,
				rating: 4,
				author: "David Foster",
				isbn: "9781492041948",
			},
		]
	},
	{
		name: "Python",
		books: [
			{
				title: "Fluent Python",
				description: 'Comenzando la sección de Python, tengo "**Fluent Python**”, sin duda uno de los mejores libros sobre Python que he leído. Está orientado a gente con conocimiento intermedio del lenguaje y lleva este conocimiento a otro nivel. Definitivamente uno que tienes que leer 🟢'				,
				rating: 5,
				author: "Luciano Ramalho",
				isbn: "9781492056355",
			},
			{
				title: "Python for DevOps",
				description: 'Con un título engañoso, "**Python for DevOps**” no habla mucho de Python la verdad, más bien debería llamarse simplemente DevOps. Además de que sufre de parecer un montón de posts de blog en forma de libro. Si quieres aprender DevOps, seguro hay mejores libros 🔴',
				rating: 1,
				author: "Noah Gift, Kennedy Behrman, Alfredo Deza, Grig Gheorghiu",
				isbn: "9781492057642",
			},
			{
				title: "High Performance Python",
				description: '"**High Performance Python**”, este libro me agarró por sorpresa. No es fácil de comprender, y definitivamente no es para principiantes sino para gente con conocimiento avanzado, es muy denso en información y creo que los ejemplos podrían ser más claros, aún así, recomendado 🟢',
				rating: 4,
				author: "Micha Gorelick, Ian Ozsvald",
				isbn: "9781492055020",
			},
			{
				title: "Python Testing with Pytest",
				description: 'No he leído "**Python Testing with Pytest**”, pero he escuchado buenísimas opiniones sobre él de personas que confío, así que yo creo que 🟢',
				rating: 5,
				author: "Micha Gorelick, Ian Ozsvald",
				isbn: "1680508601",
			},
			{
				title: "Elegant SciPy",
				description: 'El título suena intrigante "**Elegant SciPy**", pareciera que te va a enseñar a escribir buen código, pero creo que se pierde mucho en ejemplos complicados que no ayudan en nada a entender los conceptos que se pretenden mostrar. Si quieres saber más de Python científico le puedes echar un ojo 🟠',
				rating: 3,
				author: "Juan Nunez-Iglesias, Stéfan van der Walt, Harriet Dashnow",
				isbn: "9781491922941",
			},
		]
	}
];

export default booksData;
