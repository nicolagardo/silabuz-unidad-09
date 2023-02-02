def is_even(n):
    return n % 2 == 0

def test_is_even():
    test_cases = [
        (2, True),
        (0, True),
        (-2, True),
        (1, False)
    ]

    for n, expected in test_cases:
        result = is_even(n)
        assert result == expected, f"Para n = {n}, se esperaba {expected} pero se obtuvo {result}"
    print("Todo OK")
test_is_even()