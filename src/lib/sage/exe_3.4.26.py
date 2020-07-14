for n in range(1, 1000000):
    G = Integers(n)
    g = G(n - 1)
    if g*g != 1:
        print('Not for %d' % n)
