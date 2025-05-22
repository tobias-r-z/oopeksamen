metode sult(mad){
    hvis mad.real er lig med sandt{
        erklær vinkel = arctan(mad.y-this.y/mad.y-this.y)
        erklær fart = 2
        erklær enhedsvektor = ny Vektor(cos(vinkel) * fart, sin(vinkel) * fart)
        this.position += enhedsvektor
    }
}

jagt(bytte){
    erklær vinkel = arctan(bytte.y-this.y/bytte.y-this.y)
    erklær fart = 1.5
    erklær enhedsvektor = ny Vektor(cos(vinkel) * fart, sin(vinkel) * fart)
    this.position += enhedsvektor
}

