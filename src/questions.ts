
import { Categories } from "./pages/Categories";

function shuffleArray(arr:IAlternatives[]) {
    
	for (let i = arr.length - 1; i > 0; i--) {
		const j = Math.floor(Math.random() * (i + 1));
		[arr[i], arr[j]] = [arr[j], arr[i]];
	}	
	return arr;
	}

export interface IQuestionsObject{
	[category: string] : IQuestionsList[]
}

export interface IQuestionsList{
	title: string,
	alternatives: IAlternatives[]
}

export interface IAlternatives{
	text: string,
	isTrue: boolean
}


export const questionsObject:IQuestionsObject  = {

		biologia: [
{
		title: 'Qual bicho transmite Doença de Chagas?',
		
		alternatives: shuffleArray([
	   {text: 'Barbeiro', isTrue: true},
	   {text: 'Abelha', isTrue: false},
	   {text: 'Barata', isTrue: false},
	   {text: 'Pulga', isTrue: false},
	]),
	
},
{
	title: 'Qual fruto é conhecido no Norte e Nordeste como "jerimum"?',
	
	alternatives: shuffleArray([
		{text: 'Abóbora', isTrue: true},
		{text: 'Caju', isTrue: false},
		{text: 'Chuchu', isTrue: false},
		{text: 'Côco', isTrue: false},
	])
},
{
	title: 'Quem descobriu o Brasil ?',
	
	alternatives: shuffleArray([
		{text: 'Pedro Alvares Cabral', isTrue: true},
		{text: 'Cristovao colombo', isTrue: false},
		{text: 'Indios', isTrue: false},
		{text: 'Americo Vespúcio', isTrue: false},
	])
}

],
programacao: [
{
		title: 'Qual bicho transmite Doença de Chagas?',
		
		alternatives: shuffleArray([
	   {text: 'Barbeiro', isTrue: true},
	   {text: 'Abelha', isTrue: false},
	   {text: 'Barata', isTrue: false},
	   {text: 'Pulga', isTrue: false},
	]),
	
},
{
	title: 'Qual fruto é conhecido no Norte e Nordeste como "jerimum"?',
	
	alternatives: shuffleArray([
		{text: 'Abóbora', isTrue: true},
		{text: 'Caju', isTrue: false},
		{text: 'Chuchu', isTrue: false},
		{text: 'Côco', isTrue: false},
	])
},
{
	title: 'Quem descobriu o Brasil ?',
	
	alternatives: shuffleArray([
		{text: 'Pedro Alvares Cabral', isTrue: true},
		{text: 'Cristovao colombo', isTrue: false},
		{text: 'Indios', isTrue: false},
		{text: 'Americo Vespúcio', isTrue: false},
	])
}

],
		historia: [
{
		title: 'Qual o nome do presidente do Brasil que ficou conhecido como Jango?',
		
		alternatives: shuffleArray([
	   {text: 'João Goulart', isTrue: true},
	   {text: 'Jacinto Anjos', isTrue: false},
	   {text: 'João Figueiredo', isTrue: false},
	   {text: 'Jânio Quadros', isTrue: false},
	]),
	
},
{
	title: 'Quais as duas datas que são comemoradas em novembro?',
	
	alternatives: shuffleArray([
		{text: 'Proclamação da República e Dia Nacional da Consciência Negra', isTrue: true},
		{text: 'Independência do Brasil e Dia da Bandeira', isTrue: false},
		{text: 'Black Friday e Dia da Árvore', isTrue: false},
		{text: 'Dia de Finados e Dia Nacional do Livro', isTrue: false},
	])
},
{
	title: 'Quem descobriu o Brasil ?',
	
	alternatives: shuffleArray([
		{text: 'Pedro Alvares Cabral', isTrue: true},
		{text: 'Cristovao colombo', isTrue: false},
		{text: 'Indios', isTrue: false},
		{text: 'Americo Vespúcio', isTrue: false},
	])
}

],
		geografia: [
{
		title: 'Qual capital do brasil?',
		
		alternatives: shuffleArray([
	   {text: 'Brasília', isTrue: true},
	   {text: 'Ceara', isTrue: false},
	   {text: 'Rio de janeiro', isTrue: false},
	   {text: 'Maranhao', isTrue: false},
	]),
	
},
{
	title: 'Qual a montanha mais alta do Brasil?',
	
	alternatives: shuffleArray([
		{text: 'Pico da Neblina', isTrue: true},
		{text: 'Pico Paraná', isTrue: false},
		{text: 'Monte Roraima', isTrue: false},
		{text: ' Pico da Bandeira', isTrue: false},
	])
},
{
	title: 'Qual nome da linha imaginaria que divide o globo em norte e sul ?',
	
	alternatives: shuffleArray([
		{text: 'Linha do equador', isTrue: true},
		{text: 'Meridiano de greenwich', isTrue: false},
		{text: 'Linha norte/sul', isTrue: false},
		{text: 'Tropico de capricornio', isTrue: false},
	])
}

]
}
