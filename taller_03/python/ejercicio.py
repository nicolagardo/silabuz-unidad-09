import unittest

def suma(a,b):
    return a+b

def is_activate(user):
    return user.status



class TestSuma(unittest.TestCase):
    def test_suma(self):
        test_data = [
            (1, 2, 3),
            (0, 0, 0),
            (-1, 1, 0),
            (100, 200, 300)
        ]
        for data in test_data:
            result = suma(data[0], data[1])
            self.assertEqual(result, data[2])

#TODO Es par



def is_even(n):
    return n % 2  == 0


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



if __name__ == '__main__':
   test_is_even()