public static int sequence(int[] arr) {
    int max = 1;
    int count = 1;

    for (int i = 0; i < arr.length - 1; i++) {
        if (arr[i+1] - arr[i] == 1)
            count++;
        else {
            if (count > max)
                max = count;

            count = 1;
        }
    }

    return max;
}

 0  1  2  3  4  5  6  7  8  9 -> 10
[6, 7, 3, 4, 1, 2, 3, 4, 5, 7]


class Toy {
    String name;
    int volume;
}

public static int sumVolume(Node<Toy> list) {
    if (list == null)
        return 0;

    return list.getValue().getVolume() + sumVolume(list.getNext()) 
}



class ToyBox {
    void putToy(Toy t)

    int toyBoxSpace()

    Toy removeToy()
}


public static Toy bigToy(ToyBox tb) {
    ToyBox tb2 = new ToyBox();
    Toy max = tb.removeToy();
    
    while (tb.toyBoxSpace() != 100) {
        Toy temp = tb.removeToy();

        if (max.getVolume() < temp.getVolume()) {
            tb2.putToy(max);
            max = temp;
        }
        else {
            tb2.putToy(temp);
        }
    }

    while (tb2.toyBoxSpace() != 100) {
        tb.putToy(tb2.removeToy());
    }

    return max;
}





Domino: [0-6, 0-6]

counter[]: 0 1 2 3 4 5 6 7 8 9 10 11 12
           0 0 0 0 0 0 1 2 3

[3, 4], [5, 1], [6, 1]
  7       6        7


public static int frequentSum(Domino[] arr) {
    int[] counter = new int[13];
    for (int i = 0; i < counter.length; i++)
        counter[i] = 0;
    
    for (int i = 0; i < arr.length; i++) {
        int sum = arr[i].getLeft() + arr[i].getRight();
        counter[sum]++;
    }

    int maxIndex = 0;
    for (int i = 0; i < counter.length; i++) {
        if (counter[maxIndex] < counter[i]) {
            maxIndex = i;
        }
    }

    return maxIndex;
}


           [2, 8, 1]

    [4, 5, 6]     [4, 5, 6]

public static boolean SortTree(BinNode<Node<Integer>> bt) {
    if (bt == null)
        return false;

    if (! isAscending(bt.getValue()))
        return false;
    
    if (!bt.hasRight() && !bt.hasLeft()) {
        return true;
    }
    else if (bt.hasRight() && !bt.hasLeft()) {
        if (bt.getValue().getValue() > bt.getRight().getValue().getValue())
            return SortTree(bt.getRight());
        else
            return false;
    }
    else if (!bt.hasRight() && bt.hasLeft()) {
        if (bt.getValue().getValue() < bt.getLeft().getValue().getValue())
            return SortTree(bt.getLeft());
        else
            return false;
    }
    else {
        if (bt.getValue().getValue() > bt.getRight().getValue().getValue()
            &&
            bt.getValue().getValue() < bt.getLeft().getValue().getValue()
           )
            return SortTree(bt.getLeft()) && SortTree(bt.getRight());

        return false;
    }
}

public static boolean isAscending(Node<Integer> list)
{
    Node<Integer> prev = list;
    Node<Integer> pos = prev.getNext();

    while (pos != null) {
        if (prev.getValue() > pos.getValue())
            return false;
        
        prev = pos;
        pos = pos.getNext();
    }

    return true;
}