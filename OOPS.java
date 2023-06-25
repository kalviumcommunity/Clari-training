class Pen {
    String color;
    String type;

    public void write() {
        System.out.println("write something");
    }
}

class Student {
    String name;
}

public class OOPS {
    public static void main(String args[]) {
        Pen pen1 = new Pen();
        pen1.color = "blue";
        pen1.type = "gel";

        pen1.write();

        Student s1 = new Student();
        s1.name = "shubham";
    }
}