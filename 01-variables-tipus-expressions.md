# Variables, tipus i expressions

## Tipus bàsics

| Tipus  | Literals |
|--------|----------|
| int    | `3` &nbsp;&nbsp;&nbsp; `6` &nbsp;&nbsp;&nbsp; `-10` &nbsp;&nbsp;&nbsp; `0` |
| double | `1.6` &nbsp;&nbsp;&nbsp; `10.0` &nbsp;&nbsp;&nbsp; `0.0` &nbsp;&nbsp;&nbsp; `0.000000000001` &nbsp;&nbsp;&nbsp; `-0.9` &nbsp;&nbsp;&nbsp; `-45.9999` |
| char   | `'a'` &nbsp;&nbsp;&nbsp; `'A'` &nbsp;&nbsp;&nbsp; `'0'` &nbsp;&nbsp;&nbsp; `'$'` &nbsp;&nbsp;&nbsp; `' '` &nbsp;&nbsp;&nbsp; `'.'` &nbsp;&nbsp;&nbsp; `'@'` |
| string | `"Hola mundo"` &nbsp;&nbsp;&nbsp; `"abc"` &nbsp;&nbsp;&nbsp; `" "` &nbsp;&nbsp;&nbsp; `"A"` &nbsp;&nbsp;&nbsp; `""` |
| bool   | `True` &nbsp;&nbsp;&nbsp; `False` |

## Variables (declaració i inicialització)

```csharp
string? elTeuNom;
int edat = 10;
bool majorEdat;
string frase = "Bon dia a tothom";
double temperatura;
char grupClasse;
```

## Assignació

```csharp
elTeuNom = "Manel";
temperatura = 23.20;
grupClasse = 'A';
```

## Constants

```csharp
const double PI = 3.1416;
const double TEMPERATURA_MAXIMA = 42.5;
```

## Llegir de teclat

```csharp
string elTeuNom;
int edat;
bool majorEdat;
double temperatura;
char grupClasse;

// Lectura d'un text
Console.Write("ENTRA EL TEU NOM: ");
elTeuNom = Console.ReadLine();

// Lectura d'un enter
Console.Write("ENTRA LA TEVA EDAT: ");
edat = Convert.ToInt32(Console.ReadLine());

// Lectura d'un decimal
Console.Write("ENTRA LA TEMPERATURA: ");
temperatura = Convert.ToDouble(Console.ReadLine());

// Lectura d'un caràcter
Console.Write("ENTRA EL GRUP CLASSE: ");
grupClasse = Convert.ToChar(Console.ReadLine()!);

// Lectura d'un booleà
Console.Write("ETS MAJOR D'EDAT? ");
majorEdat = Convert.ToBoolean(Console.ReadLine());
```

## Escriptura per pantalla

```csharp
Console.Write("COM ET DIUS? ");
Console.WriteLine("Bla bla bla bla bla bla bla");

string elTeuNom = "Laura";
int edat = 23;
Console.WriteLine($"Hola, em dic {elTeuNom}, i tinc {edat} anys");
```

```text
> Hola, em dic Laura, i tinc 23 anys
```

```csharp
Console.WriteLine($"2 + 2 = {2 + 2}");
```

```text
> 2 + 2 = 4
```

## Operacions aritmètiques

| Operador | Operació       | Exemple   | Resultat |
|----------|----------------|-----------|----------|
| `+`      | Suma           | `7 + 2`   | `9`      |
| `-`      | Resta          | `7 - 2`   | `5`      |
| `*`      | Multiplicació  | `7 * 2`   | `14`     |
| `/`      | Divisió        | `7.0 / 2` | `3.5`    |
| `%`      | Residu (mòdul) | `7 % 2`   | `1`      |

```csharp
int a = 7;
int b = 2;

int suma = a + b;            // 9
int resta = a - b;           // 5
int multiplicacio = a * b;   // 14
double divisio = 7.0 / 2;    // 3.5
int residu = a % b;          // 1
```

### Ordre de les operacions

| Prioritat | Operadors         |
|-----------|-------------------|
| 1a        | `( )`             | 
| 2a        | `*` &nbsp; `/` &nbsp; `%` |
| 3a        | `+` &nbsp; `-`    | 

> Els operadors amb la mateixa prioritat s'avaluen d'esquerra a dreta.

```csharp
Console.WriteLine(2 + 3 * 4);      // 14 → primer 3 * 4
Console.WriteLine((2 + 3) * 4);    // 20 → primer el parèntesi
Console.WriteLine(10 - 4 - 2);     // 4  → (10 - 4) - 2
Console.WriteLine(20 / 4 * 2);     // 10 → (20 / 4) * 2
Console.WriteLine(7 + 10 % 3);     // 8  → 7 + (10 % 3)
```

### Divisió entera

Quan **els dos operands són enters** (`int`), el resultat de `/` també és enter: es perd la part decimal (no s'arrodoneix, es trunca).

```csharp
int a = 7;
int b = 2;

Console.WriteLine(a / b);            // 3   (divisió entera)
Console.WriteLine(7.0 / 2);          // 3.5 (divisió decimal)
Console.WriteLine((double)a / b);    // 3.5 (convertim un operand a double)
```

> Si almenys un dels operands és `double`, la divisió és decimal.

### Residu

L'operador `%` retorna el **residu** d'una divisió entera.

```csharp
Console.WriteLine(7 % 2);    // 1  → 7 = 2·3 + 1
Console.WriteLine(10 % 3);   // 1  → 10 = 3·3 + 1
Console.WriteLine(15 % 5);   // 0  → 15 és múltiple de 5
Console.WriteLine(4 % 7);    // 4  → 4 = 7·0 + 4
```

## Retallar números

Combinant la **divisió entera** (`/`) i el **residu** (`%`) per 10, 100, 1000... podem separar les xifres d'un número enter.

| Exemple            | Resultat |
|--------------------|----------|
| `1234 % 10`        | `4`      |
| `1234 / 10 % 10`   | `3`      |
| `1234 / 100 % 10`  | `2`      |
| `1234 / 1000`      | `1`      |
| `1234 / 100`       | `12`     |
| `1234 % 100`       | `34`     |
| `1234 / 10 % 100`  | `23`     |
| `1234 / 10`        | `123`    |
| `1234 % 1000`      | `234`    |

### Exercici: separar una data

Tenim una data guardada com un sol número amb el format `AAAAMMDD`.

<details>
<summary>Mostra la solució</summary>

```csharp
int data = 20260924;

int any = data / 10000;          // 2026
int mes = data / 100 % 100;      // 9
int dia = data % 100;            // 24

Console.WriteLine($"Dia {dia}, mes {mes}, any {any}");
```

```text
> Dia 24, mes 9, any 2026
```

</details>

### Exercici: capgirar un número de 3 xifres

Anem **retallant** el número: agafem l'última xifra amb `% 10` i després la traiem amb `/ 10`.

<details>
<summary>Mostra la solució</summary>

```csharp
int numero = 472;

int unitats = numero % 10;       // 2
numero = numero / 10;            // 47

int desenes = numero % 10;       // 7
numero = numero / 10;            // 4

int centenes = numero;           // 4

int capgirat = unitats * 100 + desenes * 10 + centenes;   // 274

Console.WriteLine($"El número capgirat és {capgirat}");
```

```text
> El número capgirat és 274
```

</details>

## ASCII

Cada caràcter (`char`) té associat un **número enter**: el seu codi ASCII.

| Caràcters        | Codis ASCII  |
|------------------|--------------|
| `' '` (espai)    | `32`         |
| `'0'` ... `'9'`  | `48` ... `57`  |
| `'A'` ... `'Z'`  | `65` ... `90`  |
| `'a'` ... `'z'`  | `97` ... `122` |

### Convertir de `char` a `int`

```csharp
char lletra = 'A';
int codi = (int)lletra;          // 65

Console.WriteLine((int)'a');     // 97
Console.WriteLine(Convert.ToInt32('A'));     // 65
```
### Convertir de `int` a `char`

```csharp
int codi = 66;
char lletra = (char)codi;        // 'B'

Console.WriteLine((char)97);     // 'a'
Console.WriteLine(Convert.ToChar(48));     // '0'
```

## Valors aleatoris (Random)

Per generar valors aleatoris primer creem un objecte `Random` (**només un cop**) i després el fem servir tantes vegades com calgui.

```csharp
Random rnd = new Random();
```

| Instrucció              | Què retorna                                  | Exemple de resultat |
|-------------------------|----------------------------------------------|---------------------|
| `rnd.Next()`            | Un enter positiu qualsevol                   | `1804289383`        |
| `rnd.Next(10)`          | Un enter entre `0` i `9`                     | `7`                 |
| `rnd.Next(1, 7)`        | Un enter entre `1` i `6`                     | `4`                 |

> El valor **màxim no s'inclou**: `rnd.Next(1, 7)` pot donar de `1` a `6`, mai `7`.

### Exemple de Random amb enters

```csharp
Random rnd = new Random();

int dau = rnd.Next(1, 7);             // de 1 a 6
int nota = rnd.Next(0, 11);           // de 0 a 10
int temperatura = rnd.Next(-5, 36);   // de -5 a 35
```

### Exemple de Random amb caràcters

Com que els caràcters tenen un codi [ASCII](#ascii), podem generar un número aleatori i convertir-lo a `char`.

```csharp
Random rnd = new Random();

char majuscula = (char)rnd.Next('A', 'Z' + 1);   // de 'A' a 'Z'
char minuscula = (char)rnd.Next('a', 'z' + 1);   // de 'a' a 'z'
char digit     = (char)rnd.Next('0', '9' + 1);   // de '0' a '9'
```

### Exercici: notes aleatòries

Fes un programa que generi **dues notes aleatòries** entre `0` i `10` i mostri les notes i la **mitjana**.

```text
> Nota 1: 6
> Nota 2: 9
> Mitjana: 7.5
```

<details>
<summary>Mostra la solució</summary>

```csharp
Random rnd = new Random();

int nota1 = rnd.Next(0, 11);
int nota2 = rnd.Next(0, 11);

double mitjana = (nota1 + nota2) / 2.0;

Console.WriteLine($"Nota 1: {nota1}");
Console.WriteLine($"Nota 2: {nota2}");
Console.WriteLine($"Mitjana: {mitjana}");
```

> Dividim per `2.0` i no per `2` perquè la divisió no sigui entera.

</details>

### Exercici: matrícula aleatòria

Fes un programa que generi una **matrícula de cotxe aleatòria**, la guardi en una variable `string` i la mostri. El format és `0000 AAA`:

- 4 dígits (de `0` a `9`)
- un espai
- 3 lletres majúscules (de `A` a `Z`)

```text
> La teva matrícula és: 4821 BKM
```

<details>
<summary>Mostra la solució</summary>

```csharp
Random rnd = new Random();

string matricula = "";

// 4 dígits
matricula = matricula + rnd.Next(0, 10);
matricula = matricula + rnd.Next(0, 10);
matricula = matricula + rnd.Next(0, 10);
matricula = matricula + rnd.Next(0, 10);

// espai
matricula = matricula + " ";

// 3 lletres
matricula = matricula + (char)rnd.Next('A', 'Z' + 1);
matricula = matricula + (char)rnd.Next('A', 'Z' + 1);
matricula = matricula + (char)rnd.Next('A', 'Z' + 1);

Console.WriteLine($"La teva matrícula és: {matricula}");
```

> Comencem amb `matricula = ""` (cadena buida) i hi anem **enganxant** cada dígit i cada lletra amb `+`.

</details>