##CLASS
class isThirteen:

    def isThirteen(n):
        ## first checks if int
        if isinstance(n, int) == True:
            if n == 13:
                return True
            else:
                return False

        ## then checks if float
        elif isinstance(n, float) == True:
            if n == 13.0:
                return True
            else:
                return False

        ## then checks if str, and lowers it
        elif isinstance(n, str) == True:
            if n.lower() == "thirteen":
                return True
            else:
                return False
        else:
            return False
