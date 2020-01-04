namespace WIP
{
    public class Force
    {
        public int xComponent;
        public int yComponent;
        public int deccleration;
        public Force(int x, int y, int dec)
        {
            xComponent = x;
            yComponent = y;
            deccleration = dec;
        }

        public int getXComponent()
        {
            return xComponent;
        }

        public int getYComponent()
        {
            return yComponent;
        }

        public void setXComponent(int x)
        {
            xComponent = x;
        }
        public void setYComponent(int y)
        {
            yComponent = y;
        }
    }
}