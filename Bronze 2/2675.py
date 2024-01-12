num = int(input())

for i in range(num):
    R, S = map(str, input().split())
    R2 = int(R)
    S2 = list(S)

    for x in S2:
        print(x*R2, end="")
    print()