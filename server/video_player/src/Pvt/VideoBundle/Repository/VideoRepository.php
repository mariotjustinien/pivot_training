<?php

namespace Pvt\VideoBundle\Repository;

/**
 * VideoRepository
 *
 * This class was generated by the Doctrine ORM. Add your own custom
 * repository methods below.
 */
class VideoRepository extends \Doctrine\ORM\EntityRepository
{
    
    public function heurAsc(){
        $qb = $this->_em->createQueryBuilder();
        $qb  ->select('v')
            ->from ('PvtVideoBundle:Video','v')
            ->orderBy('v.heure','DESC');
        
        $videoList=$qb->getQuery()->getArrayResult();
        return $videoList;
    }
    
}