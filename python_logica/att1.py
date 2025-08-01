L# 01 - Se o usuário tiver +18 anos (imprimir mensagem)
#      se menor de 18 anos (imprimir mensagem)

#idade = int(input("Quantos anos você tem? "))

#if (idade >= 18):
#    print ("\nVocê é maior de idade")
#else:
#    print("\nVocê é menor de idade")



# 02 - Se o usuário tiver +18 anos (imprimir mensagem)
#      se menor de 18 anos (imprimir mensagem)
#     se a idade negativa (imprimir mensagem)

#idade = int(input("Quantos anos você tem? "))

#if (idade > 0):
#    if (idade >= 18):
#        print ("\nVocê é maior de idade")
#    else:
#        print("\nVocê é menor de idade")
#else:
#    print ("Você forneceu uma idade invalida")



# 03 - Se o usuário tiver +18 anos (imprimir mensagem)
#      se menor de 18 anos (imprimir mensagem)
#      menor de 18 e maior de 16 e estiver acompanhado
#      ele poderá entrar
#      se a idade negativa (imprimir mensagem)


#acompanhado = True
#idade = int(input("Quantos anos você tem? "))

#if (idade > 0):
#    if (idade >= 18):
#        print ("\nVocê é maior de idade, por isso pode entrar")
#    else:
#        if (idade < 18 and idade >= 16 and acompanhado == True):
#            print("\nVocê é menor de idade, mas pode entrar, pois está acompanhado.")
#        else:
#            print("Você é menor de idade e não pode entrar")
#else:
#    print ("Você forneceu uma idade invalida")


# 03 - Se o usuário tiver +18 anos (imprimir mensagem)
#      se menor de 18 anos (imprimir mensagem)
#      menor de 18 e maior de 16 e estiver acompanhado
#      ele poderá entrar
#      checar a idade da companhia, deve ser maior que 18
#      se a idade negativa (imprimir mensagem)

acompanhado = True
idade = int(input("Quantos anos você tem? "))

if (idade > 0):
    if (idade >= 18):
        print ("\nVocê é maior de idade, por isso pode entrar.")
    else:
        if (idade < 18 and idade >= 16 and acompanhado == True):
            idade_acompanhante = int(input("Quantos anos seu acompanhante tem? "))
            if idade_acompanhante > 0:
                if idade_acompanhante >= 18:
                    print("\nVocê é menor de idade, mas pode entrar, pois está acompanhado.")
                else:
                    print("Você é menor de idade e não pode entrar, pois seu acompnhante também é menor de idade.")
            else:
                print("Você forneceu uma idade invalida.")
        else:
            print("Você é menor de idade e não pode entrar, pois não tem acompanhante.")
else:
    print ("Você forneceu uma idade invalida.")