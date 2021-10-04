# ASSESSMENT 4: Ruby Coding Practical Questions
# MINASWAN

# --------------------1) Create a method that takes in a number and determines if the number is even or odd. Use the test variables provided.

num1 = 7
# Expected output: '7 is odd'
num2 = 42
# Expected output: '42 is even'
num3 = 221
# Expected output: '221 is odd'

def even_odd number
  if number%2 == 0
    "#{number} is even"
  else
    "#{number} is odd"
  end
end

p even_odd(num1)
p even_odd(num2)
p even_odd(num3)


# -------------------2) Create a method that takes in a string and removes all the vowels from the string. Use the test variables provided.
# HINT: Check out this resource: https://ruby-doc.org/core-2.6/String.html#method-i-delete

album1 = 'Rubber Soul'
# Expected output: 'Rbbr Sl'
album2 = 'Sgt Pepper'
# Expected output: 'Sgt Pppr'
album3 = 'Abbey Road'
# Expected output: 'bby Rd'

def vowels string
  "#{string}".delete('a''e''i''o''u''A''E''I''O''U')
end

p vowels(album1)
p vowels(album2)
p vowels(album3)



# -------------------3) Create a method that takes in a string and checks if the string is a palindrome.
# A palindrome is the same word spelled forwards or backwards. Use the test variables provided.

is_palindrome1 = 'Racecar'
# Expected output: 'Racecar is a palindrome'
is_palindrome2 = 'LEARN'
# Expected output: 'LEARN is not a palindrome'
is_palindrome3 = 'Rotator'
# Expected output: 'Rotator is a palindrome'

def palindrome word
  if "#{word}".downcase == "#{word}".downcase.reverse
    "#{word} is a palindrome"
  else
    "#{word} is not a palindrome"
  end
end

p palindrome(is_palindrome1)
p palindrome(is_palindrome2)
p palindrome(is_palindrome3)
